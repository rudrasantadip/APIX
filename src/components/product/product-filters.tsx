import { useState } from 'react';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLORS = ['Black', 'White', 'Gray', 'Navy', 'Red'];
const CATEGORIES = ['T-Shirts', 'Hoodies'];

export function ProductFilters() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Toggle logic for checkboxes/buttons
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

  // Apply Filter (example: logs to console or could be used for fetch)
  const applyFilter = () => {
    console.log('Applying filters:', {
      sizes: selectedSizes,
      colors: selectedColors,
      categories: selectedCategories,
    });
    // In a real app, pass these values up or trigger a fetch with these params
  };

  // Reset all selections
  const resetFilter = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedCategories([]);
  };

  return (
    <div className="space-y-6">
      {/* Categories */}
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
                className="h-5 w-5 rounded border-gray-300 accent-[#EB3131] focus:ring-[#EB3131]"
              />
              <span className="ml-2 text-sm text-[#A4A7AD]">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="text-sm font-medium text-[#EBEDEC] mb-2">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                selectedSizes.includes(size)
                  ? 'bg-[#EB3131] text-white'
                  : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="text-sm font-medium text-[#EBEDEC] mb-2">Color</h3>
        <div className="space-y-2">
          {COLORS.map((color) => (
            <label key={color} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => toggleFilter(color, selectedColors, setSelectedColors)}
                className="h-5 w-5 rounded border-gray-300 accent-[#EB3131] focus:ring-[#EB3131]"
              />
              <span className="ml-2 text-sm text-[#A4A7AD]">{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Buttons: Apply & Reset */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={applyFilter}
          className="bg-[#EB3131] text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Apply Filter
        </button>
        <button
          onClick={resetFilter}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Reset Filter
        </button>
      </div>
    </div>
  );
}
