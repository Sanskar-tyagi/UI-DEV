/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import em from "../assets/images/Lava/Lava_005_OCC.jpg";
import norm from "../assets/images/Lava/Water_002_NORM.jpg";
import disp from "../assets/images/Lava/Water_002_DISP.png";
import rough from "../assets/images/Lava/Water_002_ROUGH.jpg";
export default function Scene() {
  const loader = new THREE.TextureLoader();
  const textureMaps = {
    emissiveMap: loader.load(em),
    aoMap: loader.load(em),
    roughnessMap: loader.load(rough),
    normalMap: loader.load(norm),
    displacementMap: loader.load(disp),
  };
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            attach="material"
            color="#c0affa"
            distort={0.3}
            speed={3}
            map={textureMaps.map}
            emissiveMap={textureMaps.emissiveMap}
            emissiveIntensity={2}
            aoMap={textureMaps.aoMap}
            roughnessMap={textureMaps.roughnessMap}
            normalMap={textureMaps.normalMap}
            displacementMap={textureMaps.displacementMap}
            displacementScale={0.5}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
}
