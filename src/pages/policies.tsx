import { Routes, Route, Link, useLocation } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="prose max-w-none ">
      <h2 className="text-[#EBEDEC]">Terms of Service</h2>
      <p className="text-[#A4A7AD]">
        Welcome to ModernThreads. By accessing our website and making purchases,
        you agree to these terms and conditions.
      </p>
      {/* Add more terms content */}
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-[#EBEDEC]">Privacy Policy</h2>
      <p className="text-[#A4A7AD]">
        Your privacy is important to us. This policy outlines how we collect,
        use, and protect your personal information.
      </p>
      {/* Add more privacy policy content */}
    </div>
  );
}

function ShippingPolicy() {
  return (
    <div className="prose max-w-none">
      <h2 className="text-[#EBEDEC]">Shipping Policy</h2>
      <p className="text-[#A4A7AD]">
        We offer various shipping options to meet your needs. Standard shipping
        is free for orders over $50.
      </p>
      {/* Add more shipping policy content */}
    </div>
  );
}

function ReturnsPolicy() {
  return (
    <div className="prose max-w-none">
      <h2>Returns & Exchanges</h2>
      <p>
        We want you to be completely satisfied with your purchase. If you're not
        happy with your order, you can return it within 30 days.
      </p>
      {/* Add more returns policy content */}
    </div>
  );
}

export function Policies() {
  const location = useLocation();
  const policies = [
    { name: 'Terms of Service', path: '/policies' },
    { name: 'Privacy Policy', path: '/policies/privacy' },
    { name: 'Shipping', path: '/policies/shipping' },
    { name: 'Returns & Exchanges', path: '/policies/returns' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <nav className="space-y-1">
            {policies.map((policy) => (
              <Link
                key={policy.name}
                to={policy.path}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === policy.path
                    ? 'bg-gray-900 text-white'
                    : 'text-[#EBEDEC] hover:bg-gray-600 text-gray-600'
                }`}
              >
                {policy.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="md:col-span-3">
          <Routes>
            <Route index element={<TermsOfService />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="shipping" element={<ShippingPolicy />} />
            <Route path="returns" element={<ReturnsPolicy />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}