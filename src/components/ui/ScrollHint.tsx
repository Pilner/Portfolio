import { faComputerMouse, faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from '@src/hooks/UseMediaQuery';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

export default function ScrollHint() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 20));

  const isMobile = !useMediaQuery('lg');

  return (
    <AnimatePresence>
      {!scrolled && (
        <motion.div
          key='scroll-hint'
          initial={false}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className='pointer-events-none absolute right-0 bottom-10 left-0 flex justify-center'
        >
          <motion.div
            animate={{ y: [0, 0, 0, -20, -20], opacity: [0, 1, 1, 1, 0] }}
            transition={{
              duration: 2.2,
              times: [0, 0.15, 0.3, 0.75, 0.85],
              ease: ['easeOut', 'linear', 'easeOut', 'easeIn'],
              repeat: Infinity,
              repeatDelay: 0.8,
            }}
          >
            <FontAwesomeIcon icon={isMobile ? faHandPointer : faComputerMouse} size='2xl' />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
