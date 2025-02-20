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
      className="relative flex flex-col justify-between items-center w-full p-4 md:p-8"
    >
      <div className="w-full">
        {/* Headline and Subheading */}
        <div className="text-center px-4 mb-12">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
            Discover the Next Wave of Style & Creativity
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4">
            Explore cutting-edge designs made for dreamers and trendsetters.
          </p>
        </div>

        {/* 3D Logo */}
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] flex justify-center items-center">
          <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ background: 'transparent' }}
          >
            {/* Directional light */}
            <directionalLight position={[1, 1, 10]} intensity={1.2} castShadow />

            {/* Ambient light */}
            <ambientLight intensity={1} />

            {/* Front spotlight */}
            <spotLight
              position={[0, 2, 5]}
              intensity={300}
              angle={0.8}
              penumbra={0.6}
              color="#EB3131"
              castShadow
            />

            {/* Back spotlight */}
            <spotLight
              position={[0, -2, -5]}
              intensity={700}
              angle={0.8}
              penumbra={0.6}
              color="#EB3131"
              castShadow
            />

            {/* ApixLogo component */}
            <ApixLogo />

            {/* Contact shadows */}
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.5}
              blur={1.5}
              far={5}
            />

            {/* Orbit controls */}
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-[#EB3131] px-6 py-3 rounded-md hover:bg-[#AB2525] text-white text-sm sm:text-base md:text-lg">
            <Link to="/products">Shop Now</Link>
          </button>
        </div>

        {/* Marquee Element */}
        <div className="w-full py-9 mt-12 flex flex-row justify-center items-center">
          <div className="marquee-container w-full overflow-hidden text-white">
            <div className="marquee-text whitespace-nowrap">
              <span className="mx-4">
                SHIPPING POLICY: Fast shipping, premium product quality, and exceptional service.
              </span>
              <span className="mx-4">
                SHIPPING POLICY: Fast shipping, premium product quality, and exceptional service.
              </span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-text {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}
