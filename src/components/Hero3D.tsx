import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, useTexture } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import type { Group, Mesh } from "three";

const EARTH_TEXTURE = "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";

function Earth() {
  const earth = useRef<Mesh>(null);
  const atmosphere = useRef<Mesh>(null);
  const surface = useTexture(EARTH_TEXTURE);

  useFrame((state, delta) => {
    if (earth.current) {
      earth.current.rotation.y += delta * 0.075;
      earth.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.035;
    }
    if (atmosphere.current) atmosphere.current.rotation.y += delta * 0.075;
  });

  return (
    <group>
      <Float speed={0.7} rotationIntensity={0.035} floatIntensity={0.16}>
        <mesh ref={earth}>
          <sphereGeometry args={[1.48, 96, 96]} />
          <meshStandardMaterial map={surface} roughness={0.92} metalness={0.04} />
        </mesh>
        <mesh ref={atmosphere} scale={1.045}>
          <sphereGeometry args={[1.48, 64, 64]} />
          <meshBasicMaterial color="#20aaff" transparent opacity={0.12} side={THREE.BackSide} />
        </mesh>
        <mesh scale={1.075}>
          <sphereGeometry args={[1.48, 64, 64]} />
          <meshBasicMaterial color="#168bff" transparent opacity={0.055} side={THREE.BackSide} />
        </mesh>
      </Float>
    </group>
  );
}

function OrbitSystem() {
  const orbitA = useRef<Mesh>(null);
  const orbitB = useRef<Mesh>(null);
  const satellite = useRef<Group>(null);
  const networkOrbit = useRef<Group>(null);

  useFrame((state, delta) => {
    if (orbitA.current) orbitA.current.rotation.z += delta * 0.105;
    if (orbitB.current) orbitB.current.rotation.x += delta * 0.055;
    if (satellite.current) satellite.current.rotation.y += delta * 0.24;
    if (networkOrbit.current) networkOrbit.current.rotation.y -= delta * 0.035;
  });

  return (
    <group>
      <mesh ref={orbitA} rotation={[1.08, 0.22, 0.18]}>
        <torusGeometry args={[1.92, 0.009, 8, 220]} />
        <meshBasicMaterial color="#38d9ff" transparent opacity={0.9} />
      </mesh>
      <mesh ref={orbitB} rotation={[0.35, 1.08, 0.55]}>
        <torusGeometry args={[2.12, 0.006, 8, 220]} />
        <meshBasicMaterial color="#267bff" transparent opacity={0.58} />
      </mesh>
      <group ref={satellite}>
        <mesh position={[1.93, 0.12, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial color="#e6fbff" />
        </mesh>
        <mesh position={[1.93, 0.12, 0]}>
          <sphereGeometry args={[0.095, 16, 16]} />
          <meshBasicMaterial color="#19cfff" transparent opacity={0.22} />
        </mesh>
      </group>
      <group ref={networkOrbit}>
        {[
          [-0.72, 0.62, 1.25], [0.88, 0.28, 1.17], [0.3, -0.8, 1.25],
          [-1.12, -0.18, 0.92], [0.02, 1.03, 1.04], [1.08, -0.48, 0.78],
        ].map(([x, y, z], index) => (
          <group key={index} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.025, 12, 12]} />
              <meshBasicMaterial color="#9af4ff" />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.065, 12, 12]} />
              <meshBasicMaterial color="#00cfff" transparent opacity={0.18} />
            </mesh>
          </group>
        ))}
      </group>
      <pointLight position={[2.6, 1.8, 2.8]} intensity={2.2} color="#39dfff" />
      <pointLight position={[-2.2, -1.4, 1.5]} intensity={1.15} color="#0878f9" />
    </group>
  );
}

function GlobeScene() {
  return (
    <>
      <ambientLight intensity={1.25} />
      <directionalLight position={[-3, 2, 4]} intensity={2.1} color="#d9f3ff" />
      <Stars radius={35} depth={22} count={850} factor={1.7} saturation={0.25} fade speed={0.22} />
      <Earth />
      <OrbitSystem />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.55], fov: 40 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <GlobeScene />
        </Suspense>
      </Canvas>
      <div className="globe-data-card globe-data-top">
        <span className="globe-data-icon">⌁</span>
        <span><strong>Global Cloud Network</strong><small>99.99% Uptime SLA</small></span>
        <i />
      </div>
      <div className="globe-data-card globe-data-bottom">
        <span className="globe-data-icon">◈</span>
        <span><strong>Enterprise Grade</strong><small>Secure. Scalable. Reliable.</small></span>
        <i />
      </div>
      <div className="globe-live-indicator"><span /> GLOBAL CONNECTIVITY</div>
    </div>
  );
}
