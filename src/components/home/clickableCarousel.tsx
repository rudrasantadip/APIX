import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Slide {
  image: string;
  title: string;
  subtitle?: string;
}

const slides: Slide[] = [
  {
    image: 'assets/products/greedy/g1.jpg',
    title: 'Oversized T-Shirts',
    subtitle: 'Buy 2 at ₹999',
  },
  {
    image: 'assets/products/greedy/g1.jpg',
    title: 'Jeans Jackpot',
    subtitle: 'Up to 60% Off',
  },
  {
    image: 'assets/products/greedy/g1.jpg',
    title: 'Designs of the Week',
    subtitle: 'Trending picks for you',
  },
  {
    image: 'assets/products/greedy/g1.jpg',
    title: 'New Arrivals',
    subtitle: 'Fresh styles added',
  },
  {
    image: 'assets/products/greedy/g1.jpg',
    title: 'Summer Specials',
    subtitle: 'Hot deals',
  },
  {
    image: 'assets/products/greedy/g1.jpg',
    title: 'Best Sellers',
    subtitle: 'Top picks',
  },
  {
    image: 'assets/products/greedy/g1.jpg',
    title: 'Limited Edition',
    subtitle: 'Exclusive',
  },
  {
    image: 'assets/products/greedy/g1.jpg',
    title: 'Season Sale',
    subtitle: 'Discounts galore',
  },
  {
    image: 'assets/products/greedy/g1.jpg',
    title: 'Flash Deals',
    subtitle: 'Hurry up!',
  },
];

const ClickableCarousel: React.FC = () => {
  const visibleCount = 3;
  const cardWidth = 400; // each card is 400px wide
  const gap = 16; // 16px gap (Tailwind gap-4)
  const totalMove = cardWidth + gap; // each shift moves 416px

  // Extended slides: clone the first `visibleCount` slides to the end.
  const extendedSlides = [...slides, ...slides.slice(0, visibleCount)];

  // We'll slide one card at a time. For continuous scrolling, valid indices are 0..slides.length (i.e. 0..9)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-advance every 10 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // When the transition ends, if we've reached the cloned slides (i.e. currentIndex equals slides.length),
  // instantly jump back to the original start (index 0) without animation.
  const handleTransitionEnd = () => {
    if (currentIndex === slides.length) {
      setTransitionEnabled(false);
      setCurrentIndex(0);
    }
  };

  // Re-enable transition after snapping back.
  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  // The active indicator is based on the "real" slide index.
  const activeIndicator = currentIndex % slides.length;

  // Allow clicking on an indicator to jump to that slide.
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-auto w-full max-w-[1232px] overflow-hidden">
      {/* Slides container */}
      <div
        ref={containerRef}
        className={`flex gap-4 ${transitionEnabled ? 'transition-transform duration-2000 ease-in-out' : ''}`}
        style={{ transform: `translateX(-${currentIndex * totalMove}px)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => (
          <Link
            key={index}
            to="/products"
            className="flex-shrink-0 w-[400px] h-[400px] cursor-pointer relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay: black fading from bottom to center */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
            <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 p-4 rounded">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              {slide.subtitle && <p className="text-lg">{slide.subtitle}</p>}
            </div>
          </Link>
        ))}
      </div>
      {/* Circular indicator buttons placed below the carousel */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: slides.length }).map((_, i) => {
          // Determine the size of each indicator based on its distance from the active indicator.
          const distance = Math.abs(i - activeIndicator);
          let sizeClass = 'w-1.5 h-1.5'; // smallest by default
          if (distance === 0) {
            sizeClass = 'w-2.5 h-2.5'; // active: largest
          } else if (distance === 1) {
            sizeClass = 'w-2 h-2'; // immediate neighbors: medium size
          }
          return (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`${sizeClass} rounded-full ${activeIndicator === i ? 'bg-[#EB3131]' : 'bg-gray-400'}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClickableCarousel;
