import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Star, Maximize2 } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock product data - replace with actual data fetching
  const product = {
    id: 1,
    name: "Classic Black Hoodie",
    price: 59.99,
    description: "Premium quality cotton blend hoodie perfect for any casual occasion.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    rating: 4.5,
    reviews: []
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 relative">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md">
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 1}`}
                className="w-full h-24 object-cover rounded-md cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <div className="flex items-center mt-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
              />
            ))}
            <span className="ml-2 text-sm text-gray-500">
              ({product.reviews.length} reviews)
            </span>
          </div>
          
          <p className="mt-4 text-2xl font-bold text-gray-900">${product.price}</p>
          
          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900">Size</h3>
            <div className="grid grid-cols-4 gap-4 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white'
                      : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900">Color</h3>
            <div className="grid grid-cols-4 gap-4 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    selectedColor === color
                      ? 'bg-gray-900 text-white'
                      : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
            <div className="flex items-center mt-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border border-gray-300 rounded-l-md"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-16 px-3 py-1 text-center border-t border-b border-gray-300"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border border-gray-300 rounded-r-md"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>
          
          <div className="mt-8 prose prose-sm text-gray-500">
            <h3 className="text-gray-900">Description</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}