import { Button } from '../ui/button';


export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fashion hero"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          New Season Arrivals
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Discover our latest collection of premium hoodies and t-shirts. 
          Crafted with quality materials for your comfort and style.
        </p>
        <div className="mt-10">
          <Button size="lg" className="inline-flex items-center">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}