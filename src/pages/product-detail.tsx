import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Star, Maximize2 } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with actual API call
    setTimeout(() => {
      setProduct({
        id: id,
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
        reviews: 10
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="relative">
          <div className="w-full overflow-hidden rounded-lg">
            <img src={product.images[0]} alt={product.name} className="w-full h-auto object-cover" />
          </div>
          <div className="flex gap-2 mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                className="w-20 h-20 object-cover rounded-md cursor-pointer border hover:border-gray-900"
                onClick={() => {}}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-center mt-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
              />
            ))}
            <span className="ml-2 text-gray-600">{product.reviews} reviews</span>
          </div>

          <p className="mt-4 text-3xl font-semibold text-gray-900">${product.price}</p>

          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Size</h3>
            <div className="flex gap-3 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Color</h3>
            <div className="flex gap-3 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                    selectedColor === color
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Quantity</h3>
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-lg font-semibold border rounded-md"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                className="w-12 text-center border rounded-md py-2"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-lg font-semibold border rounded-md"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-8">
            <Button variant="primary" size="lg" className="w-full py-3 text-lg">
              Add to Cart
            </Button>
          </div>

          {/* Product Description */}
          <div className="mt-8 text-gray-600">
            <h3 className="text-lg font-semibold text-gray-900">Description</h3>
            <p className="mt-2">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
