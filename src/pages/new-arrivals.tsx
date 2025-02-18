import { useState } from 'react';
import { ProductCard } from '../components/product/product-card';
import { Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductFilters } from '../components/product/product-filters';
import { useProducts } from '../hooks/use-products';

export function NewArrivals() {
  const [showFilters, setShowFilters] = useState(false);
  const { products, loading } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">New Arrivals</h1>
        <div className="w-full md:w-auto flex gap-4">
          {/* <SearchBar /> */}
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

      <div className="flex flex-col md:flex-row gap-8">
        <div className={`md:w-64 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <ProductFilters />
        </div>

        <div className="flex-1">
          {loading ? (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}