// moving-component.tsx
import React from 'react';
import { motion, Transition } from 'framer-motion';
import styles from './moving-component.module.scss';
import { MovingComponentProps } from '@/types/types';

const MovingComponent: React.FC<MovingComponentProps> = ({ children, initial }) => {
  const transition: Transition = { duration: 0.5 };

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1 }}
      transition={transition}
      className={styles.animatedWrapper}
    >
      {children}
    </motion.div>
  );
};

export default MovingComponent;
