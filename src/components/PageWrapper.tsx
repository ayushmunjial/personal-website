import { motion } from "framer-motion";
import { type ReactNode } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0 },
  exit:   { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.5,
  ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
};

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="initial" animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;