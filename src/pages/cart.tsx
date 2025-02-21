import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Trash2 } from 'lucide-react';
import type { CartItem } from '../types';

export function Cart() {
  // Mock cart data - replace with actual cart state management
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: {
        id: 1,
        name: "Classic Black Hoodie",
        price: 999,
        description: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpbuolP_ZESfCnM3Go-X5mWS4TdsFZHJ_ww&s"],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Gray', 'Navy'],
        category: "Hoodies",
        rating: 4.5,
        reviews: []
      },
      quantity: 1,
      size: "M",
      color: "Black"
    }
  ]);

  const updateQuantity = (index: number, newQuantity: number) => {
    const updated = [...cartItems];
    updated[index].quantity = Math.max(1, newQuantity);
    setCartItems(updated);
  };

  const removeItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 199;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)">
      <h1 className="text-3xl font-bold text-[#EBEDEC] mb-8">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[#A4A7AD] mb-4">Your cart is empty</p>
          <Link to="/products">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-[#A4A7AD]">
          <div className="lg:col-span-2 text-[#A4A7AD]" >
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center py-6 border-b text-[#A4A7AD]">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-6 flex-1 text-[#A4A7AD]">
                  <h3 className="text-lg font-medium text-[#A4A7AD]">
                    {item.product.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#A4A7AD]">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <div className="mt-2 flex items-center text-[#A4A7AD]">
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      className="px-2 py-1 border rounded-l bg-white text-black"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 text-center border-t border-b"
                    />
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className="px-2 py-1 border rounded-r bg-white text-black"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(index)}
                      className="ml-4 text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="ml-6 text-[#A4A7AD]" >
                  <p className="text-lg font-medium text-gray-900">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>₹{subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between ">
                  <p>Shipping</p>
                  <p>₹{shipping.toFixed(2)}</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-medium">
                    <p>Total</p>
                    <p>₹{total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <Link to="/checkout">
                <Button variant="primary" size="lg" className="w-full mt-6">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}