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
      <div className="absolute animate-float bg-gray-500 opacity-30 w-6 h-6 top-1/3 left-1/4"></div>
      <div className="absolute animate-float bg-gray-500 opacity-30 w-6 h-6 top-1/3 left-1/4"></div>
      <div className="absolute animate-float bg-gray-500 opacity-30 w-6 h-6 top-1/3 left-1/4"></div>
      <div className="absolute animate-float bg-gray-500 opacity-30 w-6 h-6 top-1/3 left-1/4"></div>
      
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-10">
        <div className="relative inline-block">
          {/* Hero content can be added here */}
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
      `}</style>
    </div>
  );
}
