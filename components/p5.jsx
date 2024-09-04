"use client";

import { useEffect, useRef } from "react";
import useStore from "@/store/zustand";

const P5Sketch = () => {
  const sketchRef = useRef(null);
  const p5InstanceRef = useRef(null);

  const { penColor, penWidth, penStyle } = useStore((state) => ({
    penColor: state.penColor,
    penWidth: state.penWidth,
    penStyle: state.penStyle,
  }));

  useEffect(() => {
    const loadP5 = async () => {
      const p5 = (await import("p5")).default;

      const sketch = (p) => {
        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight);
          p.background(255);
        };

        p.draw = () => {
          if (p.mouseIsPressed) {
            console.log(p, "p is");
            if (penColor === 0) {
              p.stroke(255, 0, 0);
              console.log(p, "p is");
            } else if (penColor === 1) {
              p.stroke(0, 255, 0);
            } else if (penColor === 2) {
              p.stroke(0, 0, 255);
            } else {
              p.stroke(0);
            }
            p.strokeWeight(penWidth);
            p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
          }
        };

        p.windowResized = () => {
          p.resizeCanvas(window.innerWidth, window.innerHeight);
          p.background(255);
        };
      };

      const p5Instance = new p5(sketch, sketchRef.current);
      p5InstanceRef.current = p5Instance;

      console.log(sketchRef.current);

      return () => {
        p5Instance?.remove();
      };
    };

    loadP5();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = () => {
    if (p5InstanceRef.current) {
      p5InstanceRef.current.saveCanvas("myCanvas", "png");
    }
  };

  if (p5InstanceRef.current) {
  }

  useEffect(() => {
    console.log("logging!");
  }, [p5InstanceRef]);

  useEffect(() => {
    if (p5InstanceRef.current) {
      p5InstanceRef.current.draw = () => {
        if (p5InstanceRef.current.mouseIsPressed) {
          if (penColor === 0) {
            p5InstanceRef.current.stroke(255, 0, 0);
          } else if (penColor === 1) {
            p5InstanceRef.current.stroke(0, 255, 0);
          } else if (penColor === 2) {
            p5InstanceRef.current.stroke(0, 0, 255);
          } else {
            p5InstanceRef.current.stroke(0);
          }
          p5InstanceRef.current.strokeWeight(penWidth);
          p5InstanceRef.current.line(
            p5InstanceRef.current.pmouseX,
            p5InstanceRef.current.pmouseY,
            p5InstanceRef.current.mouseX,
            p5InstanceRef.current.mouseY
          );
        }
      };
    }
  }, [penColor, penStyle, penWidth]);

  return (
    <div>
      <div ref={sketchRef}></div>
      <button onClick={handleSave}>Save Drawing</button>
      <p>{penColor}</p>
    </div>
  );
};

export default P5Sketch;
