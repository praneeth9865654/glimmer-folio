import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Mesh, Points } from 'three';

// Floating geometric shape component
function FloatingShape({ position, color, shape = 'box' }: {
  position: [number, number, number];
  color: string;
  shape?: 'box' | 'sphere' | 'octahedron';
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.5]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  }, [shape]);

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

// Particle system component
function Particles() {
  const count = 100;
  const meshRef = useRef<Points>(null);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8B5CF6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      className="absolute inset-0"
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
      
      {/* Floating geometric shapes */}
      <FloatingShape position={[-3, 2, 0]} color="#8B5CF6" shape="box" />
      <FloatingShape position={[3, -1, -2]} color="#06B6D4" shape="sphere" />
      <FloatingShape position={[0, 3, -4]} color="#8B5CF6" shape="octahedron" />
      <FloatingShape position={[-2, -2, 2]} color="#06B6D4" shape="box" />
      <FloatingShape position={[2, 1, 3]} color="#8B5CF6" shape="sphere" />
      
      {/* Particle system */}
      <Particles />
    </Canvas>
  );
};

export default Scene3D;