import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // Fixed number of slides (3)
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slide 1 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          currentSlide === 0 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="New Arrivals"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              New Arrivals
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Discover our latest collection of premium hoodies and t-shirts.
            </p>
            <Link
              to="/new-arrivals"
              className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          currentSlide === 1 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Winter Essentials"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Winter Essentials
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Stay cool with our breathable cotton t-shirts.
            </p>
            <Link
              to="/winter-essentials"
              className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          currentSlide === 2 ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Limited Edition"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Limited Edition
            </h1>
            <p className="mt-6 text-xl text-gray-100 max-w-3xl">
              Premium hoodies for your comfort.
            </p>
            <Link
              to="/limited-edition"
              className="mt-8 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20 pointer-events-auto">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`w-2 h-2 rounded-full ${
            currentSlide === 0 ? 'bg-white' : 'bg-white/50'
          }`}
        />
        <button
          onClick={() => setCurrentSlide(1)}
          className={`w-2 h-2 rounded-full ${
            currentSlide === 1 ? 'bg-white' : 'bg-white/50'
          }`}
        />
        <button
          onClick={() => setCurrentSlide(2)}
          className={`w-2 h-2 rounded-full ${
            currentSlide === 2 ? 'bg-white' : 'bg-white/50'
          }`}
        />
      </div>
    </div>
  );
}
