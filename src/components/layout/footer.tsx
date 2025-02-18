import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About APIX</h3>
            <p className="text-sm">Premium quality hoodies and t-shirts for the modern fashion enthusiast.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/people/APIX/61568755974184/" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/apixwear.in/" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-white">Shop</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              {/* <li><Link to="/blog" className="hover:text-white">Blog</Link></li> */}
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/policies/shipping" className="hover:text-white">Shipping Info</Link></li>
              <li><Link to="/policies/returns" className="hover:text-white">Returns</Link></li>
              <li><Link to="/policies/size-guide" className="hover:text-white">Size Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-[#EB3131] px-4 py-2 rounded-r-md hover:bg-[#AB2525] text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} APIX . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}