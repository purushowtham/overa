import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// 3D Bronze & Travertine Monogram Sculpture
const BronzeMonogramMesh: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const outerTorusRef = useRef<THREE.Mesh>(null);
  const innerTorusRef = useRef<THREE.Mesh>(null);
  const centralAxisRef = useRef<THREE.Mesh>(null);
  const basePlinthRef = useRef<THREE.Mesh>(null);

  // Mouse interpolation target
  const mouse = useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Smooth lerp to mouse tilt
      groupRef.current.rotation.y += (mouse.current.x * 0.4 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-mouse.current.y * 0.3 - groupRef.current.rotation.x) * 0.05;
    }

    // Continuous slow hypnotic rotation
    if (outerTorusRef.current) {
      outerTorusRef.current.rotation.z += delta * 0.12;
    }
    if (innerTorusRef.current) {
      innerTorusRef.current.rotation.y += delta * 0.18;
      innerTorusRef.current.rotation.x += delta * 0.08;
    }
    if (centralAxisRef.current) {
      centralAxisRef.current.rotation.y -= delta * 0.1;
    }
    if (basePlinthRef.current) {
      basePlinthRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
        {/* Outer Bronze Armillary Ring */}
        <mesh ref={outerTorusRef} castShadow receiveShadow>
          <torusGeometry args={[1.5, 0.035, 32, 100]} />
          <meshStandardMaterial
            color="#9A723E"
            metalness={0.88}
            roughness={0.28}
            envMapIntensity={1.2}
          />
        </mesh>

        {/* Inner Elliptical Ring (Representing the ORÉVA 'O') */}
        <mesh ref={innerTorusRef} scale={[0.75, 1.25, 0.75]} castShadow receiveShadow>
          <torusGeometry args={[1.1, 0.028, 32, 100]} />
          <meshStandardMaterial
            color="#C4975A"
            metalness={0.92}
            roughness={0.22}
          />
        </mesh>

        {/* Vertical Axis Needle */}
        <mesh ref={centralAxisRef} position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 3.4, 24]} />
          <meshStandardMaterial
            color="#9A723E"
            metalness={0.9}
            roughness={0.25}
          />
        </mesh>

        {/* Small floating bronze sphere at focal center */}
        <mesh position={[0, 0, 0]} castShadow>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial
            color="#4A3828"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Abstract Travertine Base Plinth */}
        <mesh ref={basePlinthRef} position={[0, -1.9, 0]} receiveShadow>
          <cylinderGeometry args={[0.9, 1.0, 0.22, 6]} />
          <meshStandardMaterial
            color="#DED1BC"
            roughness={0.85}
            metalness={0.05}
          />
        </mesh>
      </Float>
    </group>
  );
};

export const HeroMonogram3D: React.FC = () => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing" data-cursor="ORÉVA 3D">
      <Canvas
        shadows
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        {/* Ambient & Directional Warm Studio Lighting */}
        <ambientLight intensity={1.4} color="#F6F1E7" />
        <directionalLight
          position={[5, 8, 5]}
          intensity={2.2}
          color="#FFF8E7"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight
          position={[-5, -2, -3]}
          intensity={0.8}
          color="#B8A992"
        />
        <pointLight position={[0, 2, 2]} intensity={1.5} color="#9A723E" distance={6} />

        <BronzeMonogramMesh />
      </Canvas>
    </div>
  );
};
