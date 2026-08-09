import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import FRVLogoModel from '@src/components/model/FRVLogo';
import { usePersonalizationContext } from '@src/hooks/UsePersonalizationContext';
import { AnimatePresence, motion } from 'motion/react';
import { Suspense } from 'react';

import FRV_Logo from '@src/assets/logo/FRV_Logo.svg';

export default function HomePage() {
  const { logoView } = usePersonalizationContext();

  return (
    <main className='h-screen'>
      <div className='relative flex h-full items-center justify-center'>
        <AnimatePresence mode='wait'>
          {logoView === '3d' ? (
            <motion.div
              className='absolute inset-0'
              key='3d'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <ModelView />
            </motion.div>
          ) : (
            <motion.div
              key='2d'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <motion.img
                src={FRV_Logo}
                alt='FRV Logo'
                className='w-60 md:w-80 lg:w-100'
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function ModelView() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.75}
          minDistance={3}
          enablePan={false}
        />

        <FRVLogoModel />
      </Suspense>
    </Canvas>
  );
}
