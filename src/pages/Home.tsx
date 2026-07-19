import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import FRVLogoModel from '@src/components/model/FRVLogo';
import { usePersonalizationContext } from '@src/hooks/UsePersonalizationContext';
import { Suspense } from 'react';

import FRV_Logo from '@src/assets/logo/FRV_Logo.svg';

export default function HomePage() {
  const { logoView } = usePersonalizationContext();

  return (
    <main className='h-screen'>
      <div className='relative flex h-full items-center justify-center'>
        {logoView === '3d' ? <ModelView /> : <img src={FRV_Logo} alt='FRV Logo' className='w-60 md:w-80 lg:w-100' />}
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
