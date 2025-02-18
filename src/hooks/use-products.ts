import { useState, useEffect } from 'react';
import type { Product } from '../types';

// Mock data - replace with actual API call
const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Greedy Classic Tshirt",
    mrp:1999,
    price: 999,
    description: "Premium quality cotton blend hoodie perfect for any casual occasion.",
    images: ["assets/products/greedy/g1.jpg"],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray', 'Navy'],
    category: "Hoodies",
    rating: 4.5,
    reviews: []
  },
  {
    id: 2,
    name: "Lost In Translation",
    mrp:1999,
    price: 999,
    description: "Classic crew neck t-shirt made from 100% organic cotton.",
    images: ["assets/products/lost_in_translation/l1.jpg"],
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