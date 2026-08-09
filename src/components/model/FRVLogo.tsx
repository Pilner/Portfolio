import { useGLTF } from '@react-three/drei';
import type { ThreeElements } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FRVLogoModel(props: ThreeElements['group']) {
  const { nodes, materials } = useGLTF('models/FRV_Logo.glb');
  const groupRef = useRef<THREE.Group | null>(null);

  // center the loaded model by computing its bounding box and offsetting
  useLayoutEffect(() => {
    const g = groupRef.current;
    if (!g) return;
    const box = new THREE.Box3().setFromObject(g);
    const center = new THREE.Vector3();
    box.getCenter(center);
    // move group so model is centered at origin
    g.position.x -= center.x;
    g.position.y -= center.y;
    g.position.z -= center.z;
  }, []);

  // nodes.Curve may be typed as Object3D; cast to Mesh to access geometry
  const curveMesh = nodes.Curve as unknown as THREE.Mesh;

  return (
    <group ref={groupRef} {...props} dispose={null} scale={20} position={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={curveMesh.geometry}
        material={materials.SVGMat}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/FRV_Logo.glb');
