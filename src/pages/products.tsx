import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductFilters } from '../components/product/product-filters';
import { useProducts } from '../hooks/use-products';
import { NewProducts } from '../components/home/new-produts';
import { AllProducts } from '../components/home/all-products';

// Types (Adjust if your product type differs)
interface Product {
  id: number;
  name: string;
  mrp: number;
  price: number;
  image: string;
  rating: number;
  description: string;
}

export function Products() {
  const [showFilters, setShowFilters] = useState(false);
  const { products, loading } = useProducts();

  // Simple local wishlist state (optional; remove if not needed)
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (productId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Card component that matches the reference image
  const ProductCard = ({ product }: { product: Product }) => {
    const isWishlisted = wishlist.includes(product.id);

    return (
      <Link
        to={`/product/${product.id}`}
        className="relative bg-[#2b2b2b] p-4 text-white"
      >
        {/* Wishlist Heart (top-right) */}
        <button
          onClick={(e) => toggleWishlist(product.id, e)}
          className="absolute top-3 right-3 z-10"
          aria-label="Toggle wishlist"
        >
          {isWishlisted ? (
            // Filled Heart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4.004 4.004 0 015.657 0L10 6.343l1.172-1.171a4.004 4.004 0 115.656 5.657L10 16.657l-6.828-6.829a4.004 4.004 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            // Outline Heart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.172 5.172a4.004 4.004 0 015.657 0L10 6.343l1.172-1.171a4.004 4.004 0 115.656 5.657L10 16.657l-6.828-6.829a4.004 4.004 0 010-5.656z"
              />
            </svg>
          )}
        </button>

        {/* Product Image */}
        <div className="w-full h-64 bg-gray-200 overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          {/* Star Rating (bottom-left corner, on a white pill) */}
          <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049.305a1 1 0 011.902 0l1.342 4.134a1 1 0 00.95.69h4.356c.969 0 1.371 1.24.588 1.81l-3.523 2.562a1 1 0 00-.364 1.118l1.342 4.134c.3.926-.755 1.69-1.54 1.118l-3.523-2.562a1 1 0 00-1.176 0l-3.523 2.562c-.784.572-1.84-.192-1.54-1.118l1.342-4.134a1 1 0 00-.364-1.118L.814 6.94c-.783-.57-.38-1.81.588-1.81h4.356a1 1 0 00.95-.69L9.05.305z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <h3 className="mt-3 text-lg font-bold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-300">{product.description}</p>
        <div className="flex items-baseline space-x-2 mt-2">
          <p className="text-xl font-bold text-white">₹{product.price}</p>
          <p className="line-through text-gray-400">₹{product.mrp}</p>
          <p className="text-green-400 text-sm font-semibold">50% off</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#EBEDEC] mb-4 md:mb-0">
          All Products
        </h1>
        <div className="w-full md:w-auto flex gap-4">
          {/* Toggle Filters on Mobile */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Main Content: Filters + Product Grid */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <ProductFilters />
        </div>

        {/* Product Listing */}
        <div className="flex-1">
          {loading ? (
            // Loading Skeleton
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-64 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            // Actual Products
            <AllProducts />
          )}
        </div>
      </div>
    </div>
  );
}
