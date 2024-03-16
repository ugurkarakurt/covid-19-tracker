import { animate, AnimationControls } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
}

function Counter({ from, to }: CounterProps) {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    let count: AnimationControls | undefined;

    if (node) {
      count = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          if (node) {
            node.textContent = value.toFixed(0);
          }
        }
      });
    }

    return () => {
      if (count) {
        count.stop();
      }
    };
  }, [from, to]);

  return <span ref={nodeRef}>0</span>;
}

export default Counter;
