import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { User, Package, Heart, Award, Edit2 } from 'lucide-react';
import { Wishlist } from './wishlist';

function Profile() {
  const defaultProfilePicture = 'https://randomuser.me/api/portraits/lego/1.jpg';
  const [profilePicture, setProfilePicture] = useState(defaultProfilePicture);
  const [showPictureOptions, setShowPictureOptions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pictureContainerRef = useRef<HTMLDivElement>(null);

  // For date picking: store formatted date (dd-mm-yyyy)
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const hiddenDateRef = useRef<HTMLInputElement>(null);

  // Close dropdown if clicking outside the picture container
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        pictureContainerRef.current &&
        !pictureContainerRef.current.contains(e.target as Node)
      ) {
        setShowPictureOptions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle file selection for profile picture
  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  // Trigger file selection for profile picture
  const triggerFileSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPictureOptions(false);
    fileInputRef.current?.click();
  };

  // Toggle the dropdown for picture options
  const togglePictureOptions = () => {
    setShowPictureOptions((prev) => !prev);
  };

  // Remove profile picture (reset to default)
  const removeProfilePicture = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProfilePicture(defaultProfilePicture);
    setShowPictureOptions(false);
  };

  // Trigger the hidden date input's calendar
  const triggerDatePicker = () => {
    // Some browsers support showPicker() (e.g., Edge); fallback to click()
    if (hiddenDateRef.current?.showPicker) {
      hiddenDateRef.current.showPicker();
    } else {
      hiddenDateRef.current?.click();
    }
  };

  // Handle date selection; format from yyyy-mm-dd to dd-mm-yyyy
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      const formatted = formatDate(value);
      setDateOfBirth(formatted);
    }
  };

  const formatDate = (value: string): string => {
    const parts = value.split('-');
    if (parts.length !== 3) return value;
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

  return (
    <div className="space-y-4 relative">
      {/* Custom global styles */}
      <style>{`
        /* Hide the default date icon by making it invisible but keeping the field functional */
        .custom-date::-webkit-calendar-picker-indicator {
          opacity: 0;
          pointer-events: none;
        }
        .custom-date::-webkit-clear-button,
        .custom-date::-webkit-inner-spin-button {
          display: none;
        }
        /* Remove the default arrow from <select> and style it */
        .custom-select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-position: right 0.75rem center;
          background-repeat: no-repeat;
          background-size: 1rem;
          padding-right: 1.5rem;
        }
        .custom-select {
          background-image: url("data:image/svg+xml,%3Csvg fill='white' viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M143 352.3 7 216.3C-2.3 207-2.3 191.1 7 181.7l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0L160 256l96.5-96.9c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 34L177 352.3c-9.3 9.4-24.5 9.4-33.9 0z'/%3E%3C/svg%3E");
        }
        .custom-select option {
          background-color: #2d2d2d;
          color: #fff;
        }
      `}</style>

      {/* Header with Profile Title and Picture */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Profile</h2>
        <div ref={pictureContainerRef} className="relative" onClick={togglePictureOptions}>
          <img
            src={profilePicture}
            alt="Profile"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover cursor-pointer"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePictureOptions();
            }}
            className="absolute bottom-0 right-0 bg-[#EB3131] p-1 rounded-full hover:bg-[#B22525]"
          >
            <Edit2 className="h-4 w-4 text-white" />
          </button>
          {showPictureOptions && (
            <div className="absolute right-0 top-full mt-1 w-40 bg-gray-900 rounded-md shadow-lg overflow-hidden z-10">
              <button
                onClick={removeProfilePicture}
                className="block w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-800"
              >
                Remove Profile Picture
              </button>
              <button
                onClick={triggerFileSelect}
                className="block w-full text-left px-3 py-2 text-sm text-white hover:bg-gray-800"
              >
                Set Profile Picture
              </button>
            </div>
          )}
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            ref={fileInputRef}
            className="hidden"
            onChange={handlePictureChange}
          />
        </div>
      </div>

      {/* Profile Form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>

          {/* Email (full width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Gender</label>
            <select
              className="custom-select mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Mobile Number</label>
            <input
              type="tel"
              placeholder="+91 90995 90995"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>

          {/* Date of Birth: visible text input triggers hidden date picker */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Date of Birth</label>
            <input
              type="text"
              placeholder="dd-mm-yyyy"
              value={dateOfBirth}
              onClick={triggerDatePicker}
              readOnly
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none cursor-pointer"
            />
            <input
              type="date"
              ref={hiddenDateRef}
              onChange={handleDateChange}
              className="hidden"
               style={{ position: 'absolute'}}
            />
          </div>

          {/* Address Line 1 (full width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Address Line 1</label>
            <input
              type="text"
              placeholder="2384 South Elm Street, Apt 7C"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>

          {/* Address Line 2 (full width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Address Line 2</label>
            <input
              type="text"
              placeholder="1250 North Oak Boulevard, Suite 10"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-300">City</label>
            <input
              type="text"
              placeholder="Kolkata"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-300">State</label>
            <input
              type="text"
              placeholder="West Bengal"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Zip Code</label>
            <input
              type="text"
              placeholder="700 102"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>

          {/* Country (full width) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300">Country</label>
            <input
              type="text"
              placeholder="India"
              className="mt-1 w-full bg-transparent text-white border-b-2 border-gray-600 focus:border-[#EB3131] focus:outline-none"
            />
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-4">
          <Button variant="primary" className="bg-[#EB3131] hover:bg-[#B22525]">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

/* ------------------ Other Components ------------------ */
function Orders() {
  const orders = [
    {
      id: '#1234',
      date: '2024-12-15',
      total: 999,
      status: 'Delivered',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Order History</h2>
      <div className="space-y-2">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-700 rounded-lg p-3 bg-gray-800"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-white">Order {order.id}</p>
                <p className="text-sm text-gray-400">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-white">₹{order.total}</p>
                <p className="text-sm text-green-400">{order.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//WISHLIST
<Wishlist />

function LoyaltyPoints() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">Loyalty Program</h2>
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-medium text-gray-300">Current Points</p>
            <p className="text-3xl font-bold text-white">250</p>
          </div>
          <Award className="h-12 w-12 text-white" />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2 text-gray-300">How to Earn Points</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>• Make a purchase: 1 point per $1 spent</li>
            <li>• Write a review: 50 points</li>
            <li>• Refer a friend: 100 points</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Orders, Wishlist, LoyaltyPoints };

export function Account() {
  const location = useLocation();
  const navigation = [
    { name: 'Profile', path: '/account', icon: User },
    { name: 'Orders', path: '/account/orders', icon: Package },
    { name: 'Wishlist', path: '/account/wishlist', icon: Heart },
    { name: 'Loyalty Points', path: '/account/loyalty', icon: Award },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-black to-gray-800 min-h-screen">
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
                      : 'text-gray-300 hover:bg-gray-700'
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
