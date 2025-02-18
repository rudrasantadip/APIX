import { Button } from "../components/ui/button";

export function About() {
  return (
    <div 
    className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#EDEBEC] mb-4">Our Story</h1>
        <p className="max-w-full mx-auto text-lg text-[#A4A7AD] text-justify">
          At ApixWear.in, we believe that fashion is more than just
          clothing—it’s a statement of individuality and confidence. Our
          premium-quality hoodies and t-shirts are designed for the modern
          fashion enthusiast who values both comfort and style. Crafted with
          high-quality fabrics and attention to detail, our apparel blends
          contemporary aesthetics with superior durability. Whether you're
          looking for casual streetwear, minimalistic designs, or bold statement
          pieces, ApixWear has something for everyone. We are committed to
          providing an exceptional shopping experience, ensuring that every
          piece you wear reflects your unique personality. Elevate your wardrobe
          with ApixWear.in—where fashion meets quality.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#EDEBEC]">
            Quality First
          </h3>
          <p className="text-gray-500">
            Premium materials and expert craftsmanship in every piece.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#EDEBEC]">
            Sustainability
          </h3>
          <p className="text-gray-500">
            Eco-friendly practices and materials in our production.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#EDEBEC]">
            Style & Comfort
          </h3>
          <p className="text-gray-500">
            Designs that blend modern trends with everyday comfort.
          </p>
        </div>
      </div>

      {/* Team Section */}
     


      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-[#EDEBEC] text-3xl font-bold mb-4">
          Join Our Journey
        </h2>
        <p className="max-w-2xl mx-auto text-[#A4A7AD] mb-8">
          Be part of our story. Subscribe to our newsletter for exclusive
          updates, behind-the-scenes content, and special offers.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="bg-[#EB3131] hover:bg-[#AB2525] text-white"
        >
          Subscribe Now
        </Button>
      </div>
    </div>
  );
}
