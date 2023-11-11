import { useEffect, useRef } from 'react';
import p5 from 'p5';
import { Link } from 'react-router-dom';

function BlobComponent() {
    const containerRef = useRef<HTMLDivElement | null>(null);
  let sketch = (p: p5) => {
    let points: p5.Vector[] = [];
    let noiseOffset = 0;

    p.setup = () => {
      p.createCanvas(100, 100);
      let resolution = 100;
      let angle = p.TWO_PI / resolution;

      for (let i = 0; i < p.TWO_PI; i += angle) {
        let x = p.cos(i) * 25 + p.width / 2;
        let y = p.sin(i) * 25 + p.height / 2;
        let point = p.createVector(x, y);
        points.push(point);
      }
    };

    p.draw = () => {
      p.background(249, 249, 249);
      p.noStroke();
    
      p.fill(127, 127, 255, 150);
      p.beginShape();

      for (let i = 0; i < points.length; i++) {
        let point = points[i];
        let offset = p.map(p.noise(point.x * 0.01, point.y * 0.01, noiseOffset), 0, 1, -25, 25);
        let x = point.x + offset;
        let y = point.y + offset;
        p.vertex(x, y);
      }

      p.endShape(p.CLOSE);
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

  return <Link to={'/'}><div  ref={containerRef} className='canvas-container' /></Link>;
}

export default BlobComponent;
