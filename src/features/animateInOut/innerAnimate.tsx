import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  delay?: number;
};

const InnerAnimate = ({ children, delay = 0.1 }: Props) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default InnerAnimate;
