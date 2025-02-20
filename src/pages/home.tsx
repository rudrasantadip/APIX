import Logo3D from '../components/home/logo3d';
import { NewProducts } from '../components/home/new-produts';

export function Home() {
  return (
    <div className="relative pt-10 min-h-screen bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)] overflow-hidden">
      
      {/* Random Floating Elements as Gray Squares with Reduced Opacity */}
      <div className="absolute animate-float bg-gray-500 opacity-30 w-10 h-10 top-10 left-5"></div>
      <div className="absolute animate-float bg-gray-500 opacity-30 w-8 h-8 top-32 right-10"></div>
      <div className="absolute animate-float bg-gray-500 opacity-30 w-6 h-6 top-1/3 right-1/3"></div>
      <div className="absolute animate-float bg-gray-500 opacity-30 w-6 h-6 top-1/3 left-1/4"></div>
      
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-10">
        <div className="relative inline-block">
          {/* Hero content can go here */}
        </div>
      </div>
      
      <Logo3D />
      
      <div>
        <NewProducts />
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Marquee styles */
        .marquee-container {
          position: absolute; /* or "fixed" if you want it pinned to the viewport */
          bottom: 0;
          width: 100%;
          overflow: hidden;
          background-color: #000; /* Adjust as needed */
          color: #fff; /* Adjust as needed */
          padding: 0.5rem 0;
          white-space: nowrap;
          z-index: 50; /* Ensure it's on top */
        }

        .marquee-text {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }

        @keyframes marquee {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
