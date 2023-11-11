import { useEffect, useRef } from 'react';
import p5 from 'p5';
import { useNavigate } from "react-router-dom";

function BlobTwo() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  let sketch = (p: p5) => {
      let points: p5.Vector[] = [];
      let noiseOffset = 0;
      let blobCenter = p.createVector(25, 25); // Initial center of the blob

      p.setup = () => {
          const canvas = p.createCanvas(50, 50);
          let resolution = 50;
          let angle = p.TWO_PI / resolution;

          for (let i = 0; i < p.TWO_PI; i += angle) {
              points.push(p.createVector(0, 0)); // Points are relative to blobCenter
          }

          canvas.mouseClicked(() => {
              navigate('/'); // Navigate on canvas click
          });
      };

      p.draw = () => {
          p.background(249, 249, 249);
          p.noStroke();
      
          p.fill(127, 127, 255, 150);
          p.beginShape();

          let angle = p.TWO_PI / points.length;
          for (let i = 0; i < points.length; i++) {
              let xoff = p.cos(angle * i) * 12.5;
              let yoff = p.sin(angle * i) * 12.5;
              points[i].x = xoff;
              points[i].y = yoff;

              let nx = points[i].x + blobCenter.x;
              let ny = points[i].y + blobCenter.y;
              let offset = p.map(p.noise(nx * 0.01, ny * 0.01, noiseOffset), 0, 1, -12.5, 12.5);

              p.vertex(nx + offset, ny + offset);
          }
          p.endShape(p.CLOSE);

          // Move blob center towards mouse position slowly
          if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
              let mouse = p.createVector(p.mouseX, p.mouseY);
              blobCenter.lerp(mouse, 0.02); // Interpolate towards mouse position
          }

          noiseOffset += 0.005;
      };
  };

  useEffect(() => {
      if (containerRef.current) {
          let canvas = new p5(sketch, containerRef.current);
          return () => {
              canvas.remove();
          };
      }
  }, []);

  return <div ref={containerRef} className='article-blob' />;
}

export default BlobTwo;
