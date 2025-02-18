import { useState, useEffect } from 'react';
import type { Product } from '../types';

// Mock data for products and featured products
const products: Product[] = [
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
    sizes: ['S', 'M', 'L'],
    colors: ['White'],
    category: "T-Shirts",
    rating: 4.2,
    reviews: []
  }
];

const featuredProducts: Product[] = [
  {
    id: 3,
    name: "Gray Melange Hoodie",
    price: 64.99,
    description: "A stylish gray melange hoodie for everyday wear.",
    images: ["https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
    sizes: ['M', 'L', 'XL'],
    colors: ['Gray'],
    category: "Hoodies",
    rating: 4.7,
    reviews: []
  },
  {
    id: 4,
    name: "Vintage Print Tee",
    price: 29.99,
    description: "Vintage print tee with a classic fit.",
    images: ["https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"],
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'White'],
    category: "T-Shirts",
    rating: 4.0,
    reviews: []
  }
];

export function useSearch(query: string) {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchProducts = async () => {
      setLoading(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Combine all products and featured products
        const allProducts = [...products, ...featuredProducts];

        // Filter based on query
        const filteredResults: Product[] = allProducts.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        );

        setResults(filteredResults);
      } catch (error) {
        console.error('Error searching products:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      searchProducts();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  return { results, loading };
}
