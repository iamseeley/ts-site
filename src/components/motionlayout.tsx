import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

type MotionLayoutProps = {
  children: ReactNode;
};

export const MotionLayout: FC<MotionLayoutProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0.3 }}
    className=''
  >
    {children}
  </motion.div>
);
