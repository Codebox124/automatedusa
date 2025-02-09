'use client'
import React, { useState } from "react";
import { FaSearch, FaFileInvoice, FaHandshake, FaCheckCircle } from "react-icons/fa";

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the process take?",
      answer: "The process typically takes between 24 to 72 hours, depending on your specific requirements.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use encrypted protocols to ensure your data is fully protected and compliant with industry standards.",
    },
    {
      question: "What documents do I need?",
      answer: "You will need tax documents, business financial statements, and identification proof to get started.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900">How It Works</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          A simple and automated process to make tax consultation seamless.
        </p>
      </div>

      {/* Step-by-Step Process */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="p-6 border rounded-lg shadow-md text-center">
          <FaSearch className="text-green-700 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-green-900">Step 1: Register</h3>
          <p className="text-gray-600 mt-2">Sign up and provide necessary details to get started.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-md text-center">
          <FaFileInvoice className="text-green-700 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-green-900">Step 2: Upload Documents</h3>
          <p className="text-gray-600 mt-2">Submit your tax-related documents securely through our platform.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-md text-center">
          <FaHandshake className="text-green-700 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-green-900">Step 3: Consultation</h3>
          <p className="text-gray-600 mt-2">Our experts review your documents and provide tailored advice.</p>
        </div>

        <div className="p-6 border rounded-lg shadow-md text-center">
          <FaCheckCircle className="text-green-700 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-bold text-green-900">Step 4: Finalization</h3>
          <p className="text-gray-600 mt-2">Receive your tax plan and finalize your filing process.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-green-900 text-center">FAQs</h3>
        <div className="mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 rounded-lg bg-white shadow-md">
              <button
                className="flex justify-between w-full text-left text-lg font-medium text-green-900"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
