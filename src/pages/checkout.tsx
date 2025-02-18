import { useState } from 'react';
import { Button } from '../components/ui/button';

export function Checkout() {
  const [step, setStep] = useState(1);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)]">
      <div className="max-w-3xl mx-auto">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {['Shipping', 'Payment', 'Review'].map((label, index) => (
            <div key={label} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step > index + 1
                    ? 'bg-green-500 text-white'
                    : step === index + 1
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-[#A4A7AD]'
                }`}
              >
                {index + 1}
              </div>
              <span className="ml-2 text-[#A4A7AD]">{label}</span>
              {index < 2 && (
                <div className="w-24 h-1 mx-4 bg-gray-200">
                  <div
                    className="h-full bg-[#A4A7AD] transition-all"
                    style={{
                      width: step > index + 1 ? '100%' : '0%',
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Shipping Information */}
        {step === 1 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  />
                </div>
              </div>
              
              <Button
                variant="primary"
                className="w-full"
                onClick={() => setStep(2)}
              >
                Continue to Payment
              </Button>
            </form>
          </div>
        )}

        {/* Payment Information */}
        {step === 2 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
                  />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() => setStep(3)}
                >
                  Continue to Review
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Order Review */}
        {step === 3 && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-6">Review Your Order</h2>
            {/* Order summary and confirmation button */}
            <div className="space-y-4">
              <div className="border-t border-b py-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$59.99</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Shipping</span>
                  <span>$5.99</span>
                </div>
                <div className="flex justify-between mt-2 font-semibold">
                  <span>Total</span>
                  <span>$65.98</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
                <Button
                  variant="primary"
                  className="flex-1"
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
