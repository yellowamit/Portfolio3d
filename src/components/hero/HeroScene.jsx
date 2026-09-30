import { Canvas } from "@react-three/fiber";
import Shape from "./Shape";

const HeroScene = () => {
  return (
    <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 5], fov: 45 }}>
      <Shape />
    </Canvas>
  );
};

export default HeroScene;
