import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold text-[#EDEBEC] mb-4">Contact Us</h1>
          <p className="text-[#A4A7AD] mb-8">
            Have a question or feedback? We'd love to hear from you. Fill out the form
            below and we'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-gray-400 mr-4" />
              <div>
                <h3 className="text-lg text-[#EDEBEC] font-medium">Email</h3>
                <p className="text-[#A4A7AD]">apixwear.official@com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-gray-400 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-[#EDEBEC]">Phone</h3>
                <p className="text-[#A4A7AD]">+91 99036 33194</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-gray-400 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-[#EDEBEC]">Address</h3>
                <p className="text-[#A4A7AD]">
                  123 Fashion Street<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form className="bg-[#EBEDEC] p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                ></textarea>
              </div>
              
              <Button variant="primary" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}