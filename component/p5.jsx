"use client";

import { useEffect, useRef } from "react";
import p5 from "p5";

const P5Sketch = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.background(255);
      };

      p.draw = () => {
        if (p.mouseIsPressed) {
          p.stroke(0);
          p.strokeWeight(4);
          p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        p.background(255);
      };
    };

    const p5Instance = new p5(sketch, sketchRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;
