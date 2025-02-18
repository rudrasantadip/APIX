import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { Button } from '../ui/button';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col h-[480px] w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md">
      {/* Image Section */}
      <div className="w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-center object-cover group-hover:opacity-75"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          {/* Product Name */}
          <h3 className="text-sm text-gray-700 font-medium truncate">
            <Link to={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
              />
            ))}
            <span className="ml-1 text-sm text-gray-500">({product.reviews.length})</span>
          </div>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price and Buttons */}
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-900">${product.price}</p>
          <div className="mt-2 flex space-x-2">
            <Button
              variant="primary"
              className="flex-1"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic here
              }}
              >
              Add to Cart
            </Button>
            <Button
              variant="secondary"
              className="flex-1"
              onClick={(e) => {
                e.preventDefault();
                // Buy now logic here
              }}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
