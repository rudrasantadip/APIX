export function FAQ() {
  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all unworn items in their original packaging. Shipping costs for returns are the responsibility of the customer unless the item is defective.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout for 1-2 business day delivery.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. International shipping times vary by location and typically take 7-14 business days.'
    },
    {
      question: 'How do I care for my items?',
      answer: 'Each item comes with specific care instructions on the label. Generally, we recommend washing in cold water and hanging to dry to maintain the quality and fit of your garments.'
    },
    {
      question: 'What size should I order?',
      answer: 'Please refer to our size guide for detailed measurements. If you\'re between sizes, we recommend ordering the larger size for a more comfortable fit.'
    }
  ];

  return (
  <div className="bg-gradient-to-b from-[#121212] to-[#767676] via-[#121212] bg-[linear-gradient(to_bottom,_#121212_0%,_#767676,_2%)]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <h1 className="text-3xl font-bold text-[#EBEDEC] mb-8">
        Frequently Asked Questions
      </h1>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-4 focus:outline-none"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <span className="ml-6 h-7 flex items-center">
                  <svg
                    className="h-6 w-6 transform rotate-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
            </button>
            <div className="px-6 pb-4">
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}