import { ShoppingBag, User, Search, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// CouponTicker component: cycles through coupon messages with a cube flip animation
function CouponTicker() {
  const couponMessages = [
    "Use code SAVE10 for 10% off!",
    "Grab code DEAL20 to save 20%!",
    "Coupon CODE30 gives you 30% discount!",
    "Enter code EXTRA15 for an extra 15% off!"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % couponMessages.length);
        setAnimate(false);
      }, 500); // animation duration
    }, 3000); // change coupon every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className={`text-sm font-medium text-gray-700 transform transition-transform duration-500 perspective ${animate ? "animate-cube" : ""}`}>
        {couponMessages[currentIndex]}
      </div>
    </div>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${searchInput.trim()}`);
    }
  };

  return (
    <nav className="bg-[#EBEDEC] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between">
          {/* Left Section: Logo and navigation links */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/assets/apix font.jpg" alt="Company Logo" className="h-8 w-8 mr-2" />
              <h1 className="text-xl font-bold">APIX</h1>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/products" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Shop
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Center Section: Coupon Ticker */}
          <div className="hidden md:flex flex-1 justify-center">
            <CouponTicker />
          </div>

          {/* Right Section: Search and action icons */}
          <div className="hidden sm:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <Button type="submit" variant="outline" size="sm" className="ml-2">
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <Link to="/cart">
              <Button variant="outline" size="sm">
                <ShoppingBag className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <Button variant="outline" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-4 py-2">
        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button type="submit" variant="outline" size="sm" className="ml-2">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/products" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700">Shop</Link>
            <Link to="/about" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700">About</Link>
            <Link to="/blog" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700">Blog</Link>
            <Link to="/contact" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700">Contact</Link>
          </div>
        </div>
      )}

      {/* Inline CSS for the cube flip animation */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        @keyframes cubeFlip {
          0% {
            transform: translateY(0) rotateX(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-100%) rotateX(90deg);
            opacity: 0;
          }
          50.1% {
            transform: translateY(100%) rotateX(-90deg);
            opacity: 0;
          }
          100% {
            transform: translateY(0) rotateX(0deg);
            opacity: 1;
          }
        }
        .animate-cube {
          animation: cubeFlip 0.5s ease-in-out;
        }
      `}</style>
    </nav>
  );
}
