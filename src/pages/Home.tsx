import { Html, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import FRVLogoModel from '@src/components/model/FRVLogo';
import { usePersonalizationContext } from '@src/hooks/UsePersonalizationContext';
import { motion } from 'motion/react';
import { Suspense, useState } from 'react';

import FRV_Logo from '@src/assets/logo/FRV_Logo.svg';

export default function HomePage() {
  const { logoView } = usePersonalizationContext();
  const [hasEntered3d, setHasEntered3d] = useState(false);

  if (logoView === '3d' && !hasEntered3d) {
    setHasEntered3d(true);
  }

  return (
    <main className='h-screen'>
      <div className='relative flex h-full items-center justify-center'>
        <motion.div
          className={`absolute inset-0 ${logoView === '3d' ? '' : 'pointer-events-none'}`}
          initial={false}
          animate={{ opacity: logoView === '3d' ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {hasEntered3d && <ModelView active={logoView === '3d'} />}
        </motion.div>

        <motion.div
          className='pointer-events-none absolute inset-0 flex items-center justify-center'
          initial={false}
          animate={{ opacity: logoView === '2d' ? 1 : 0 }}
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
      </div>
    </main>
  );
}

function ModelView({ active }: { active: boolean }) {
  return (
    <Canvas frameloop={active ? 'always' : 'demand'} camera={{ position: [0, 0, 10], fov: 50 }}>
      <Suspense
        fallback={
          <Html center>
            <img src={FRV_Logo} className='w-24 animate-pulse' />
          </Html>
        }
      >
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
