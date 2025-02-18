import { useState, useEffect } from 'react';
import type { Product } from '../types';

// Mock data - replace with actual API call
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    price: 59.99,
    description: "Premium quality cotton blend hoodie perfect for any casual occasion.",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    category: "Hoodies",
    rating: 4.5,
    reviews: []
  },
  {
    id: 2,
    name: "Essential White Tee",
    price: 24.99,
    description: "Classic crew neck t-shirt made from 100% organic cotton.",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray'],
    category: "T-Shirts",
    rating: 4.8,
    reviews: []
  },
  // Add more mock products as needed
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        // Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(MOCK_PRODUCTS);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
}