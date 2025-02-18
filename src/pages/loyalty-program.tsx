import { Award, Gift, Users } from 'lucide-react';
import { Button } from '../components/ui/button';

export function LoyaltyProgram() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ModernThreads Rewards
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-500">
          Join our loyalty program and earn points with every purchase.
          Redeem them for exclusive rewards and special offers.
        </p>
      </div>

      {/* How It Works */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-gray-900" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Join</h3>
          <p className="text-gray-500">
            Sign up for a free account and start earning points immediately
          </p>
        </div>
        
        <div className="text-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="h-8 w-8 text-gray-900" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Earn</h3>
          <p className="text-gray-500">
            Earn points with every purchase and by engaging with our community
          </p>
        </div>
        
        <div className="text-center">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-8 w-8 text-gray-900" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Redeem</h3>
          <p className="text-gray-500">
            Use your points for discounts, exclusive items, and special perks
          </p>
        </div>
      </div>

      {/* Points Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
        <div className="px-6 py-4 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold">How to Earn Points</h2>
        </div>
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Action</th>
                <th className="text-right py-2">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Make a purchase</td>
                <td className="text-right">1 point per $1</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Write a review</td>
                <td className="text-right">50 points</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Refer a friend</td>
                <td className="text-right">100 points</td>
              </tr>
              <tr>
                <td className="py-2">Birthday bonus</td>
                <td className="text-right">200 points</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Rewards Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Silver</h3>
          <p className="text-gray-500 mb-4">0 - 999 points</p>
          <ul className="space-y-2 mb-6">
            <li>• Free standard shipping</li>
            <li>• Birthday surprise</li>
            <li>• Early access to sales</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-900">
          <h3 className="text-xl font-semibold mb-4">Gold</h3>
          <p className="text-gray-500 mb-4">1,000 - 4,999 points</p>
          <ul className="space-y-2 mb-6">
            <li>• All Silver benefits</li>
            <li>• Free express shipping</li>
            <li>• Exclusive member events</li>
            <li>• Double points days</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Platinum</h3>
          <p className="text-gray-500 mb-4">5,000+ points</p>
          <ul className="space-y-2 mb-6">
            <li>• All Gold benefits</li>
            <li>• Priority customer service</li>
            <li>• Free returns</li>
            <li>• Early access to new collections</li>
            <li>• Personal shopping assistance</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button variant="primary" size="lg">
          Join Now
        </Button>
      </div>
    </div>
  );
}