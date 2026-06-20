import type {
  ReactNode,
} from 'react';

import {
  motion,
} from 'framer-motion';

interface SectionRevealProps {
  children: ReactNode;
}

const SectionReveal = ({
  children,
}: SectionRevealProps): React.JSX.Element => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;