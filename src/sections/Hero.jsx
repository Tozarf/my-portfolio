import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 relative">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Fausto <span className="waving-hand">🖖</span>
        </p>
        <p className="hero_tag text-gray_gradient">Software Developer</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 2, 30]} />
            {/* When the user clicks a button named "Show more", the model rotates until the computer is aligned with the perspective and then it zooms in to screen to start showing other pages*/}
            <HackerRoom
              scale={0.05}
              position={[0, 0, 0]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
