import React from "react";
import { FaBalanceScale, FaBook, FaPlug, FaBusinessTime } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900">Who Are We?</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide expert financial services to help businesses grow, stay compliant, and integrate with modern financial systems.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Tax Services */}
        <div className="p-6 border rounded-lg shadow-md">
          <FaBalanceScale className="text-green-700 text-3xl mb-4" />
          <h3 className="text-xl font-bold text-green-900">Tax Services</h3>
          <p className="text-gray-600 mt-2">
            We ensure compliance with tax regulations and help businesses optimize their tax strategies.
          </p>
          <a href="/services" className="text-green-700 font-medium mt-4 inline-block">
            Learn more &raquo;
          </a>
        </div>

        {/* Bookkeeping Services */}
        <div className="p-6 border rounded-lg shadow-md">
          <FaBook className="text-green-700 text-3xl mb-4" />
          <h3 className="text-xl font-bold text-green-900">Bookkeeping Services</h3>
          <p className="text-gray-600 mt-2">
            We manage financial records, transactions, and ensure accurate financial reporting.
          </p>
          <a href="/services" className="text-green-700 font-medium mt-4 inline-block">
            Learn more &raquo;
          </a>
        </div>

        {/* Integration Services */}
        <div className="p-6 border rounded-lg shadow-md">
          <FaPlug className="text-green-700 text-3xl mb-4" />
          <h3 className="text-xl font-bold text-green-900">Integration Services</h3>
          <p className="text-gray-600 mt-2">
            We integrate financial software, accounting tools, and tax solutions seamlessly.
          </p>
          <a href="/services" className="text-green-700 font-medium mt-4 inline-block">
            Learn more &raquo;
          </a>
        </div>

        {/* Business Consulting */}
        <div className="p-6 border rounded-lg shadow-md">
          <FaBusinessTime className="text-green-700 text-3xl mb-4" />
          <h3 className="text-xl font-bold text-green-900">Business Consulting</h3>
          <p className="text-gray-600 mt-2">
            We provide expert advice to help businesses improve operations, finance, and growth.
          </p>
          <a href="/services" className="text-green-700 font-medium mt-4 inline-block">
            Learn more &raquo;
          </a>
        </div>
      </div>
    </section>
  );
}
