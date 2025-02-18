import { useState } from 'react';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLORS = ['Black', 'White', 'Gray', 'Navy', 'Red'];
const CATEGORIES = ['T-Shirts', 'Hoodies'];
const PRICE_RANGES = [
  { label: 'Under $25', value: '0-25' },
  { label: '$25 to $50', value: '25-50' },
  { label: '$50 to $100', value: '50-100' },
  { label: 'Over $100', value: '100-' },
];

export function ProductFilters() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: (value: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-[#EBEDEC] mb-2">Categories</h3>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() =>
                  toggleFilter(category, selectedCategories, setSelectedCategories)
                }
                className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span className="ml-2 text-sm text-[#A4A7AD]">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-[#EBEDEC] mb-2">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                selectedSizes.includes(size)
                  ? 'bg-gray-900 text-white'
                  : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-[#EBEDEC] mb-2">Color</h3>
        <div className="space-y-2">
          {COLORS.map((color) => (
            <label key={color} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() =>
                  toggleFilter(color, selectedColors, setSelectedColors)
                }
                className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span className="ml-2 text-sm text-[#A4A7AD]">{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-[#EBEDEC] mb-2">Price Range</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <label key={range.value} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(range.value)}
                onChange={() =>
                  toggleFilter(
                    range.value,
                    selectedPriceRanges,
                    setSelectedPriceRanges
                  )
                }
                className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <span className="ml-2 text-sm text-[#A4A7AD]">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}