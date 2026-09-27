'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.45;
      ref.current.rotation.x += delta * 0.12;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.35, 5]} />
      <MeshDistortMaterial
        color="#00f0ff"
        emissive="#ff0055"
        emissiveIntensity={0.42}
        roughness={0.18}
        metalness={0.72}
        wireframe
        distort={0.28}
        speed={2.5}
      />
    </mesh>
  );
}

function DataRings() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.x += delta * 0.18;
    group.current.rotation.y -= delta * 0.12;
    group.current.rotation.z += delta * 0.08;
  });

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.72, 0.012, 8, 128]} />
        <meshBasicMaterial color="#00f0ff" />
      </mesh>
      <mesh rotation={[0.5, 0.7, 0]}>
        <torusGeometry args={[1.98, 0.009, 8, 128]} />
        <meshBasicMaterial color="#ff0055" />
      </mesh>
      <mesh rotation={[-0.65, 0.3, 0.9]}>
        <torusGeometry args={[2.25, 0.007, 8, 128]} />
        <meshBasicMaterial color="#8aa6b8" wireframe />
      </mesh>
    </group>
  );
}

function DataNodes() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const array = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i += 1) {
      const radius = 2.2 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      array[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      array[i * 3 + 1] = radius * Math.cos(phi);
      array[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return array;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.035;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={120} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#00f0ff" transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

export default function CyberCore3D() {
  return (
    <div className="core-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ touchAction: 'pan-y' }}
      >
        <ambientLight intensity={0.7} />
        <Core />
        <DataRings />
        <DataNodes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minPolarAngle={Math.PI * 0.32}
          maxPolarAngle={Math.PI * 0.68}
          rotateSpeed={0.38}
          touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.PAN }}
        />
      </Canvas>
    </div>
  );
}
