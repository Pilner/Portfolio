import { AnimatePresence, motion } from 'motion/react';

import HomeNavbar from '@src/components/layouts/HomeNavbar';
import { useLocation, useOutlet } from 'react-router';

export default function HomeLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className='h-dvh'>
      <HomeNavbar />
      <AnimatePresence mode='wait'>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
