import { Routes, Route, Link, useLocation } from "react-router-dom";

function TermsOfService() {
  const terms = [
    {
      title: "General",
      content:
        "These Terms govern your use of ApixWear.in and any related services provided by us. We reserve the right to modify these Terms at any time without prior notice.",
    },
    {
      title: "Eligibility",
      content:
        "You must be at least 18 years old or have parental/guardian consent to use this website. By using our website, you confirm that all information you provide is accurate and complete.",
    },
    {
      title: "Product Information & Pricing",
      content:
        "We strive to ensure that product descriptions, images, and prices are accurate; however, errors may occur. Prices are subject to change without prior notice.",
    },
    {
      title: "Orders & Payments",
      content:
        "By placing an order, you agree to provide accurate payment and shipping details. We reserve the right to cancel any order due to fraudulent activities, errors in pricing, or product unavailability.",
    },
    {
      title: "Shipping & Delivery",
      content:
        "We aim to process and ship orders within the estimated timeframes mentioned on our website. Delivery times may vary based on location, courier services, and unforeseen delays.",
    },
    {
      title: "Returns & Refunds",
      content:
        "Products may be eligible for return or exchange under specific conditions outlined in our Returns & Exchanges Policy. Refunds, if applicable, will be processed within a specified timeframe.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on ApixWear.in, including logos, images, designs, and text, is our intellectual property. Unauthorized use, reproduction, or distribution of our content is prohibited.",
    },
    {
      title: "User Conduct",
      content:
        "By using our website, you agree NOT to engage in any illegal or fraudulent activities, disrupt or harm the website's functionality, or use false information while placing orders.",
    },
    {
      title: "Privacy Policy",
      content:
        "Your personal information is collected, stored, and used in accordance with our Privacy Policy. We take security measures to protect your data but cannot guarantee absolute security.",
    },
    {
      title: "Limitation of Liability",
      content:
        "ApixWear.in is not liable for any indirect, incidental, or consequential damages arising from the use of our website or products. We do not guarantee uninterrupted access to our website.",
    },
    {
      title: "Governing Law",
      content:
        "These Terms shall be governed by and interpreted in accordance with the laws of your jurisdiction.",
    },
    {
      title: "Contact Us",
      content:
        "For any questions regarding these Terms, please contact us at support@apixwear.in.",
    },
  ];

  return (
    <div className="prose max-w-none p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-[#EBEDEC] font-bold text-2xl mb-4">Terms of Service</h2>
      <p className="text-[#A4A7AD] mb-4">
        Welcome to ApixWear. By accessing our website and making purchases, you
        agree to these terms and conditions.
      </p>
      <ul className="list-disc pl-5 space-y-4">
        {terms.map((term, index) => (
          <li key={index} className="text-[#A4A7AD]">
            <p className="font-bold text-[#EBEDEC]">{term.title}</p>
            <p className="text-[#A4A7AD]">{term.content}</p>
          </li>
        ))}
      </ul>
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
  const policies = [
    "As soon as an order is accepted, the delivery time for your shipment will begin. This includes a period of 2 working days in which our warehouse will process and dispatch your shipment from Monday through Friday. In case of restocking, the shipment period may take longer",
    "ALL ORDERS ARE REVIEWED BY OUR SECURITY TEAM AND CAN BE CANCELLED BY APIX AT ANY TIME.",
    "DUE TO HIGH DEMAND, ITEMS MAY BECOME UNAVAILABLE EVEN AFTER AN ORDER HAS BEEN PLACED. IN THIS CASE, A REFUND WILL BE ISSUED TO THE ORIGINAL PAYMENT METHOD OR BY CHECK MAILED TO THE ADDRESS LISTED FOR THE ORDER FOR THE AMOUNT INITIALLY PAID. FOR REFUNDS ISSUED TO THE ORIGINAL PAYMENT METHOD, PLEASE ALLOW 5-10 BUSINESS DAYS FOR THE REFUND TO APPEAR ON YOUR BANK STATEMENT",
  ];

  return (
    <div className="prose max-w-none p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-white font-bold text-2xl mb-4">Shipping Policy</h2>
      <p className="text-white mb-4">
        You can exchange/return the product(s), purchased from us provided the
        product(s) satisfy below mandatory conditions.
      </p>
      <ul className="text-white list-disc pl-5 mb-4 space-y-2">
        {policies.map((policy, index) => (
          <li key={index} className="text-white">
            {policy}
          </li>
        ))}
      </ul>
      <p className="text-white font-bold">
        We reserve the right to reject the exchange/return request for a product
        if it does not satisfy the aforementioned conditions.
      </p>
    </div>
  );
}

function ReturnsPolicy() {
  const policies = [
    "Items must be returned within 3 days of delivery.",
    "The product has not been worn, cleaned or tampered with by you.",
    "The brand tags, original packaging material, accompanying accessories are intact and not altered, damaged or discarded by you.",
    "Return is being initiated against the order under which it was bought and the product matches our records.",
    "We will accept the refund if the special seal is intact in its original condition and matches our records.",
    "There is no foul odour, perfume, stains, dents, scratches, tears or damage on the product.",
    "Products returned should be in unused, undamaged, unwashed and in a saleable condition.",
    "We are satisfied that the product has not been rendered defective or unusable.",
    "Return of purchased products are facilitated through our reverse-logistics partners. On receipt of request for return of product on bluorng.com and the same being duly acknowledged by us, our reverse-logistics partners may get in touch with you in order to collect the purchased products from you.",
  ];

  return (
    <div className="prose max-w-none p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-white font-bold text-2xl mb-4">
        Returns & Exchanges
      </h2>
      <p className="text-white mb-4">
        You can exchange/return the product(s), purchased from us provided the
        product(s) satisfy below mandatory conditions.
      </p>
      <ul className="text-white list-disc pl-5 mb-4 space-y-2">
        {policies.map((policy, index) => (
          <li key={index} className="text-white">
            {policy}
          </li>
        ))}
      </ul>
      <p className="text-white font-bold">
        We reserve the right to reject the exchange/return request for a product
        if it does not satisfy the aforementioned conditions.
      </p>
    </div>
  );
}

export function Policies() {
  const location = useLocation();
  const policies = [
    { name: "Terms of Service", path: "/policies" },
    { name: "Privacy Policy", path: "/policies/privacy" },
    { name: "Shipping", path: "/policies/shipping" },
    { name: "Returns & Exchanges", path: "/policies/returns" },
  ];

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <nav className="space-y-1">
            {policies.map((policy) => (
              <Link 
                key={policy.name}
                to={policy.path}
                className={`block px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === policy.path
                    ? "bg-gray-600 text-white"
                    : "text-[#EBEDEC] hover:bg-gray-600 text-white-900"
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
