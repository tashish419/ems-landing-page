import { useState } from "react";
import { faqData } from "../../constants";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="bg-gray-900 text-orange-50 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-3xl ss:text-4xl font-bold mb-8 text-orange-400">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-orange-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full p-4 bg-gray-800 hover:bg-gray-750 transition-colors duration-200 flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-left text-lg font-semibold text-orange-200">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-orange-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-orange-400 flex-shrink-0" />
                )}
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-gray-800 bg-opacity-50">
                  <p className="text-orange-100">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
