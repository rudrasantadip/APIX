import { ShoppingBag, User, Search, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${searchInput.trim()}`);
      setIsSearchOpen(false); // Close the search bar after submission
    }
  };

  return (
    <nav className="bg-[#EBEDEC] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
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
              {/* <Link to="/blog" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Blog
              </Link> */}
              <Link to="/contact" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {isSearchOpen ? (
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
            ) : (
              <Button variant="outline" size="sm" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-4 w-4" />
              </Button>
            )}
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
    </nav>
  );
}
