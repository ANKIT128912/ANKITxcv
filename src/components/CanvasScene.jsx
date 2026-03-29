import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Avatar from "../models/Avatar";

function CameraController() {
  useFrame((state) => {
    const scrollY = window.scrollY;

    // smooth movement (lerp)
    const targetZ = 5 - scrollY * 0.002;
    const targetY = scrollY * 0.002;

    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.05;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function CanvasScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      {/* 🌌 background */}
      <Stars radius={100} depth={50} count={3000} factor={4} fade />

      {/* 💡 lights */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[0, 2, 2]} intensity={2} color="#00adb5" />

      {/* 🧍 model */}
      <Avatar />

      {/* 🎬 cinematic camera */}
      <CameraController />
    </Canvas>
  );
}