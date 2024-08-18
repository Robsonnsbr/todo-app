'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface TemplatesProps {
  children: React.ReactNode;
}

function Template({ children }: TemplatesProps) {
  useEffect(() => {}, []);

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <div>{children}</div>
    </motion.div>
  );
}

export default Template;
