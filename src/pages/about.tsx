import { Button } from '../components/ui/button';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#EDEBEC] mb-4">Our Story</h1>
        <p className="max-w-2xl mx-auto text-lg text-[#A4A7AD]">
          ModernThreads was founded with a simple mission: to create high-quality, 
          sustainable clothing that looks good and feels even better.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#EDEBEC]">Quality First</h3>
          <p className="text-gray-500">Premium materials and expert craftsmanship in every piece.</p>
        </div>
        <div className="text-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#EDEBEC]">Sustainability</h3>
          <p className="text-gray-500">Eco-friendly practices and materials in our production.</p>
        </div>
        <div className="text-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#EDEBEC]">Style & Comfort</h3>
          <p className="text-gray-500">Designs that blend modern trends with everyday comfort.</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#EDEBEC]">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[#EDEBEC]">
          {[
            {
              name: 'Sarah Johnson',
              role: 'Founder & CEO',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
              name: 'Michael Chen',
              role: 'Head of Design',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
              name: 'Emily Rodriguez',
              role: 'Creative Director',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
              name: 'David Kim',
              role: 'Production Manager',
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }
          ].map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-[#A4A7AD]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-[#EDEBEC] text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="max-w-2xl mx-auto text-[#A4A7AD] mb-8">
          Be part of our story. Subscribe to our newsletter for exclusive updates,
          behind-the-scenes content, and special offers.
        </p>
        <Button variant="primary" size="lg" className="bg-[#EB3131] hover:bg-[#AB2525] text-white">
          Subscribe Now
        </Button>
      </div>
    </div>
  );
}