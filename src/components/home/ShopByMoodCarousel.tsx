import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ShopByMoodCarousel: React.FC = () => {
  // Array of image paths
  const images = [
    'assets/products/greedy/g1.jpg',
    'assets/products/greedy/g1.jpg',
    'assets/products/greedy/g1.jpg',
    'assets/products/greedy/g1.jpg',
    'assets/products/greedy/g1.jpg',
  ];

  // Array of product titles corresponding to each image
  const productTitles = [
    'Elegant Red Dress',
    'Casual Blue Shirt',
    'Vintage Leather Jacket',
    'Modern Sneakers',
    'Classic Sunglasses',
  ];

  // Array of product IDs for linking to each product page
  const productIds = ['101', '102', '103', '104', '105'];

  // State for the active indicator index
  const [activeIndicator, setActiveIndicator] = useState(0);
  // Ref to access slider methods
  const sliderRef = useRef<Slider>(null);

  // Function to navigate to a specific slide
  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,          // Remove previous/next buttons
    speed: 500,
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 2000,    // 2000ms delay between slides
    slidesToShow: 3,        // Fewer slides means larger cards
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      setActiveIndicator(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 cards on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 card on small screens
        },
      },
    ],
  };

  return (
    <div>
      {/* Inline CSS */}
      <style>{`
        .mood-carousel-container {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          padding: 1rem;
          box-sizing: border-box;
        }
        .mood-carousel-card {
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .mood-carousel-image {
          width: 100%;
          height: auto;
          display: block;
          border: 1px solid #fff; /* Thinner white border */
          border-radius: 1rem;    /* Large border radius */
          object-fit: cover;
        }
        .product-title {
          margin-top: 0.5rem;
          font-size: 1rem;
          text-align: center;
          color: #fff;
        }
        .indicator-container {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
          gap: 0.5rem;
        }
        .clickable-card {
          text-decoration: none;
        }
      `}</style>

      <div className="mood-carousel-container">
        <h2 className="text-center text-white text-4xl font-bold mb-8">Shop by Mood</h2>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="mood-carousel-card">
              <a href={`/product/${productIds[index]}`} className="clickable-card">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="mood-carousel-image"
                />
                <div className="product-title">{productTitles[index]}</div>
              </a>
            </div>
          ))}
        </Slider>
        {/* Circular indicator buttons */}
        <div className="indicator-container flex justify-center mt-4 space-x-2">
          {Array.from({ length: images.length }).map((_, i) => {
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
    </div>
  );
};

export default ShopByMoodCarousel;
