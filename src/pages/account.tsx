import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { User, Package, Heart, Award } from 'lucide-react';

function Profile() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Profile</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
          />
        </div>
        <Button variant="primary">Save Changes</Button>
      </form>
    </div>
  );
}

function Orders() {
  const orders = [
    {
      id: '#1234',
      date: '2024-03-15',
      total: 65.98,
      status: 'Delivered'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Order {order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${order.total}</p>
                <p className="text-sm text-green-600">{order.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Wishlist() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Wishlist</h2>
      {/* Wishlist items grid */}
    </div>
  );
}

function LoyaltyPoints() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Loyalty Program</h2>
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">Current Points</p>
            <p className="text-3xl font-bold">250</p>
          </div>
          <Award className="h-12 w-12 text-gray-900" />
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">How to Earn Points</h3>
          <ul className="space-y-2 text-sm">
            <li>• Make a purchase: 1 point per $1 spent</li>
            <li>• Write a review: 50 points</li>
            <li>• Refer a friend: 100 points</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Account() {
  const location = useLocation();
  const navigation = [
    { name: 'Profile', path: '/account', icon: User },
    { name: 'Orders', path: '/account/orders', icon: Package },
    { name: 'Wishlist', path: '/account/wishlist', icon: Heart },
    { name: 'Loyalty Points', path: '/account/loyalty', icon: Award },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    location.pathname === item.path
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="md:col-span-3">
          <Routes>
            <Route index element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="loyalty" element={<LoyaltyPoints />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}