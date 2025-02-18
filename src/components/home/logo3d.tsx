import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import ApixLogo from './apix-logo';
import { Link } from 'react-router-dom';

export default function Logo3D() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative flex flex-col justify-center items-center h-screen w-full"
    >
      {/* Headline and Subheading */}
      <div className="text-center px-4 mb-12">
        <h1 className="text-white text-5xl md:text-6xl font-bold">
          Discover the Next Wave of Style & Creativity
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-4">
          Explore cutting-edge designs made for dreamers and trendsetters.
        </p>
      </div>

      {/* 3D Logo */}
      <div className="relative w-full h-[50vh] flex justify-center items-center">
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 50 }}
          style={{ background: 'transparent' }}
        >
          {/* Directional light to highlight the front */}
          <directionalLight position={[1, 1, 10]} intensity={1.2} castShadow />

          {/* Add some ambient light for overall lighting */}
          <ambientLight intensity={1} />

          {/* Spotlight to illuminate the front */}
          <spotLight
            position={[0, 2, 5]}
            intensity={300}
            angle={0.8}
            penumbra={0.6}
            color="#EB3131"
            castShadow
          />

          {/* Backlight for soft glow */}
          <spotLight
            position={[0, -2, -5]}
            intensity={700}
            angle={0.8}
            penumbra={0.6}
            color="#EB3131"
            castShadow
          />

          {/* Add the ApixLogo */}
          <ApixLogo />

          {/* Contact shadows for grounding */}
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.5}
            blur={1.5}
            far={5}
          />

          {/* Orbit controls for interaction */}
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* CTA Buttons */}
      <div className="mt-12 flex justify-center space-x-4">
        <button className="bg-[#EB3131] px-6 py-3 rounded-md hover:bg-[#AB2525] text-white">
          <Link to="/products">
          Shop Now
          </Link>
        </button>
      </div>
    </motion.div>
  );
}
