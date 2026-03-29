import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function Avatar() {
  const { scene } = useGLTF("/models/avatar.glb");
  const ref = useRef();

  // 🌍 global mouse position
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (ref.current) {
      // 🌊 floating
      ref.current.position.y = Math.sin(t) * 0.15;

      // 🎯 FULL SCREEN responsive mouse
      ref.current.rotation.y +=
        (mouse.current.x * 0.6 - ref.current.rotation.y) * 0.1;

      ref.current.rotation.x +=
        (mouse.current.y * 0.3 - ref.current.rotation.x) * 0.1;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.5}
      position={[0, 0, 0]}
    />
  );
}