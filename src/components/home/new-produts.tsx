import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  mrp: number;
  price: number;
  image: string;
  rating: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Greedy Classic Tshirt",
    mrp: 1999,
    price: 999,
    image: "assets/products/greedy/g1.jpg",
    rating: 5,
    description: "A classic tee for everyday style."
  },
  {
    id: 2,
    name: "Lost In Translation",
    mrp: 1999,
    price: 999,
    image: "assets/products/lost_in_translation/l3.jpg",
    rating: 4,
    description: "Trendy and comfortable for casual outings."
  },
  {
    id: 3,
    name: "Memory Punishment",
    mrp: 1999,
    price: 999,
    image: "assets/products/memory_punishment/m2.jpg",
    rating: 5,
    description: "Stand out with a bold statement piece."
  },
  {
    id: 4,
    name: "Radio Active",
    mrp: 1999,
    price: 999,
    image: "assets/products/radioactive/r5.jpg",
    rating: 4,
    description: "Lightweight and stylish for daily wear."
  }
];

export function NewProducts() {
  // Keep track of which products are in the wishlist
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Toggle wishlist status for a given product ID
  const toggleWishlist = (productId: number, event: React.MouseEvent) => {
    // Prevent card click navigation when clicking on wishlist
    event.stopPropagation();
    event.preventDefault();
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };

  return (
    <div className="pt-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4">
          {products.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (

              <div
                key={product.id}
                className="group relative overflow-hidden hover:shadow-lg bg-white"
              >
                <Link to={`/product/${product.id}`} className="block">
                  {/* Image Container with relative positioning */}
                  <div className="w-full h-80 bg-gray-200 overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 group-hover:opacity-75 cursor-pointer"
                    />

                    {/* Star Rating on the Image (bottom-left corner) */}
                    <div className="absolute bottom-2 left-2 flex items-center space-x-1 px-2 py-1 bg-gray-100 bg-opacity-90 rounded-full">
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

                  {/* Product Info (white section) */}
                  <div className="p-2">
                    <h3 className="text-sm text-gray-800 font-bold">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-600 mt-1">
                      {product.description}
                    </p>
                    <div className="flex items-baseline space-x-2 mt-2">
                      <p className="text-lg font-semibold text-gray-900">
                        ₹{product.price}
                      </p>
                      <p className="line-through text-gray-500">
                        ₹{product.mrp}
                      </p>
                      <p className="text-green-600 text-sm font-semibold">
                        50% off
                      </p>
                    </div>
                  </div>
                </Link>
                {/* Wishlist Button positioned on top-right outside the Link */}
                <button
                  onClick={(e) => toggleWishlist(product.id, e)}
                  className="absolute top-2 right-2 z-10 p-1 transition-transform duration-200 hover:scale-110"
                  aria-label="Toggle wishlist"
                >
                  {isWishlisted ? (
                    /* Filled Heart (Wishlisted) */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-pink-500"
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
                    /* Outline Heart (Not Wishlisted) */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      className="h-6 w-6 text-gray-100"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.172 5.172a4.004 4.004 0 015.657 0L10 6.343l1.172-1.171a4.004 4.004 0 115.656 5.657L10 16.657l-6.828-6.829a4.004 4.004 0 010-5.656z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* "Explore All" Button */}
        <div className="text-center py-9">
          <Link
            to="/products"
            className="bg-[#EB3131] px-6 py-3 rounded-md hover:bg-[#AB2525] text-white"
          >
            Explore All
          </Link>
        </div>
      </div>
    </div>
  );
}
