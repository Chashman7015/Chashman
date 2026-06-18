"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * FloatingShape — a single wireframe geometric primitive that
 * drifts, rotates, and reacts to the pointer.
 */
function FloatingShape({
  geometry,
  position,
  scale,
  color,
  speed,
  emissiveIntensity = 1,
}: {
  geometry: "icosahedron" | "torus" | "octahedron" | "dodecahedron" | "torusKnot";
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  emissiveIntensity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const geo = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return new THREE.IcosahedronGeometry(1, 0);
      case "torus":
        return new THREE.TorusGeometry(0.8, 0.28, 16, 32);
      case "octahedron":
        return new THREE.OctahedronGeometry(1, 0);
      case "dodecahedron":
        return new THREE.DodecahedronGeometry(1, 0);
      case "torusKnot":
        return new THREE.TorusKnotGeometry(0.7, 0.22, 80, 12);
    }
  }, [geometry]);

  useFrame((state, delta) => {
    if (!meshRef.current || !wireRef.current) return;

    const t = state.clock.elapsedTime;
    // gentle float
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.35;
    meshRef.current.position.x = position[0] + Math.cos(t * speed * 0.7) * 0.2;

    // rotation
    meshRef.current.rotation.x += delta * 0.3 * speed;
    meshRef.current.rotation.y += delta * 0.4 * speed;

    // mouse parallax — shapes drift toward pointer
    const pointer = state.pointer;
    const targetX = pointer.x * viewport.width * 0.25;
    const targetY = pointer.y * viewport.height * 0.25;
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.02;
    meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.02;

    wireRef.current.position.copy(meshRef.current.position);
    wireRef.current.rotation.copy(meshRef.current.rotation);
    wireRef.current.scale.setScalar(scale * 1.08);
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geo} scale={scale}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity * 0.4}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh ref={wireRef} geometry={geo} scale={scale}>
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

/**
 * EnergyCore — a central pulsing distorted icosahedron that anchors the scene.
 */
function EnergyCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.2, 1), []);

  useFrame((state, delta) => {
    if (!meshRef.current || !innerRef.current) return;
    const t = state.clock.elapsedTime;

    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;

    // breathing scale
    const breathe = 1 + Math.sin(t * 1.5) * 0.08;
    meshRef.current.scale.setScalar(breathe);

    innerRef.current.rotation.x -= delta * 0.3;
    innerRef.current.rotation.y -= delta * 0.25;
    innerRef.current.scale.setScalar(breathe * 0.55);
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geo}>
        <meshStandardMaterial
          color="#d946ef"
          emissive="#d946ef"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </mesh>
      <mesh ref={innerRef} geometry={geo}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={1.2}
          metalness={0.6}
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
      {/* glow point light */}
      <pointLight color="#d946ef" intensity={2} distance={8} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#d946ef" />
      <spotLight
        position={[0, 8, 5]}
        angle={0.5}
        penumbra={1}
        intensity={1.2}
        color="#a855f7"
      />

      {/* Offset the whole scene to the right so it doesn't overlap the text on the left */}
      <group position={[3, 0, 0]}>
        <EnergyCore />

        <FloatingShape
          geometry="icosahedron"
          position={[-1.5, 1.8, -2]}
          scale={0.55}
          color="#22d3ee"
          speed={0.8}
        />
        <FloatingShape
          geometry="torus"
          position={[2.2, -1.4, -1]}
          scale={0.65}
          color="#d946ef"
          speed={1.1}
        />
        <FloatingShape
          geometry="octahedron"
          position={[1.5, 2.4, -3]}
          scale={0.4}
          color="#a855f7"
          speed={0.9}
        />
        <FloatingShape
          geometry="dodecahedron"
          position={[-1, -1.8, -2]}
          scale={0.45}
          color="#f472b6"
          speed={1.3}
        />
        <FloatingShape
          geometry="torusKnot"
          position={[0.5, -2.5, -4]}
          scale={0.38}
          color="#22d3ee"
          speed={0.7}
        />
        <FloatingShape
          geometry="octahedron"
          position={[-2.2, -0.3, -4]}
          scale={0.32}
          color="#d946ef"
          speed={1.5}
        />
        <FloatingShape
          geometry="icosahedron"
          position={[2.8, 1, -3]}
          scale={0.3}
          color="#a855f7"
          speed={1.2}
        />
      </group>
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}
