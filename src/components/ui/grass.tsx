import  { useEffect, useRef } from 'react';
import p5 from 'p5';

function WavingGrassComponent() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(600, 400);
      p.noFill();
    };

    p.draw = () => {
      p.background('#f9f9f9');

      for (let i = 0; i < p.width; i += 3) { // Reduced spacing for more density
        const grassHeight = p.random(30, 70); // Slightly longer grass
        const grassWidth = p.random(1, 3); // Varying thickness
        const windStrength = p.noise(i * 0.1, p.frameCount * 0.01) * 2; // Soft, noise-based motion

        p.push();
        p.translate(i, p.height);
        p.rotate(windStrength);

        const toneVariation = p.random(-20, 20);
        p.stroke(100 + toneVariation, 0, 100 + toneVariation);
        p.strokeWeight(grassWidth); // Apply thickness
        p.line(0, 0, 0, -grassHeight);
        p.pop();
      }
    };
  };

  useEffect(() => {
    if (containerRef.current) {
      const canvas = new p5(sketch, containerRef.current);
      return () => {
        canvas.remove();
      };
    }
  }, []);

  return <div ref={containerRef} className='canvas-container' />;
}

export default WavingGrassComponent;
