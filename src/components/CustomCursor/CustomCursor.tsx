'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const emptySubscribe = () => () => {};
const useIsClient = () => 
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

function CustomCursor() {
  const isClient = useIsClient();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 25,
    stiffness: 350,
    mass: 0.5,
  }

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [cursorX, cursorY]);

  if(!isClient) return null;

  return (
    <motion.div className="pointer-events-none fixed top-0 left-0 z-990 -translate-x-1/2 -translate-y-1/2 mix-blend-difference custom-cursor" style={{x: smoothX, y: smoothY}}>
      <div className="flex justify-center items-center rounded-full border border-white/50 w-6 h-6 custom-cursor__inner">
        <div className="rounded-full bg-accent w-1 h-1 custom-cursor__inner-dot" />
      </div>
    </motion.div>
  )

}

export default CustomCursor;