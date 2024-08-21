'use client';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

export const PageTransitionLayout = ({ children }: Props) => {
  const router = usePathname();
  return (
    <AnimatePresence mode="popLayout" key={router}>
      <motion.main>
        {children}
        <motion.div className="slide-in" initial={{ scaleY: 0, opacity: 1 }} animate={{ scaleY: 0, opacity: 1 }} exit={{ scaleY: 1, opacity: 0.2 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
        <motion.div className="slide-out" initial={{ scaleY: 1, opacity: 0.2 }} animate={{ scaleY: 0, opacity: 1 }} exit={{ scaleY: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} />
      </motion.main>
    </AnimatePresence>
  );
};
