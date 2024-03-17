import { CounterProps } from "@/types/types";
import { animate, AnimationControls, AnimationPlaybackControls } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Counter({ from, to }: CounterProps) {
  const [count, setCount] = useState<number>(from);
  const [controls, setControls] = useState<AnimationPlaybackControls | undefined>(undefined);
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    if (node) {
      const newControls = animate(from, to, {
        duration: 1,
        onUpdate(value) {
          setCount(value);
        }
      });

      setControls(newControls);
    }

    return () => {
      if (controls) {
        controls.stop();
      }
    };
  }, [from, to]);

  return <span ref={nodeRef}>{count.toFixed(0)}</span>;
}

export default Counter;
