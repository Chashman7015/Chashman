"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * DistortBlob — the central "liquid" wireframe blob that sits BEHIND the
 * profile photo, giving the 3D energy-field feel.
 */
function DistortBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.12;
      meshRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.05}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color="#d946ef"
        emissive="#d946ef"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.32}
        distort={0.45}
        speed={2}
      />
    </mesh>
  );
}

/**
 * InnerCore — a solid distorted core that glows behind the photo,
 * creating depth.
 */
function InnerCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= delta * 0.2;
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.55}>
      <icosahedronGeometry args={[1, 2]} />
      <MeshDistortMaterial
        color="#a855f7"
        emissive="#a855f7"
        emissiveIntensity={0.8}
        transparent
        opacity={0.35}
        distort={0.3}
        speed={1.5}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

/**
 * OrbitingRings — tilted neon rings around the avatar.
 */
function OrbitingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.4;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.25;
  });

  return (
    <group>
      <mesh ref={ring1Ref} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.3, 0.012, 16, 120]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 1.6, Math.PI / 4, 0]}>
        <torusGeometry args={[2.6, 0.01, 16, 120]} />
        <meshBasicMaterial
          color="#d946ef"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 2.5, 0]}>
        <torusGeometry args={[2.85, 0.008, 16, 120]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function AvatarScene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 3, 4]} intensity={1.2} color="#d946ef" />
      <pointLight position={[-4, -2, 3]} intensity={0.9} color="#22d3ee" />
      <pointLight position={[0, 0, 5]} intensity={0.6} color="#a855f7" />

      <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.4}>
        <InnerCore />
        <DistortBlob />
        <OrbitingRings />
        {/* drei Sparkles for floating particle dust */}
        <Sparkles
          count={50}
          scale={5}
          size={3}
          speed={0.4}
          color="#22d3ee"
          opacity={0.7}
        />
      </Float>
    </>
  );
}

/**
 * AvatarBlob — renders the Three.js scene (3D blob, rings, particles).
 * The profile photo itself is rendered as a 2D image on top in the parent
 * component, with a 3D tilt effect — this keeps the face clearly visible
 * while the 3D elements create the energy-field feel around it.
 */
export function AvatarBlob() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <AvatarScene />
      </Suspense>
    </Canvas>
  );
}
