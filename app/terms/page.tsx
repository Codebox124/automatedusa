import React from "react";

export default function TermsOfService() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Terms of Service
        </h1>

        <p className="text-gray-600 text-center">
          By using our website, you agree to comply with these Terms of Service. If you do not agree, please do not use our services.
        </p>

        {/* Services Provided */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Services Provided</h2>
          <p className="text-gray-600">
            We offer automated bookkeeping and tax services, including financial data processing, tax calculations, and reporting.
          </p>
        </div>

        {/* User Responsibilities */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">User Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>You must provide accurate financial data.</li>
            <li>You agree not to misuse our services for fraudulent or illegal activities.</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          </ul>
        </div>

        {/* Payment & Subscription */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Payment & Subscription</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Our services operate on a subscription or one-time payment model.</li>
            <li>Payments are processed securely via <span className="font-semibold">[Payment Processor]</span>.</li>
            <li>Refunds are subject to our refund policy.</li>
          </ul>
        </div>

        {/* Disclaimer of Liability */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Disclaimer of Liability</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>We strive for accuracy but do not guarantee error-free financial or tax calculations.</li>
            <li>We are not responsible for any financial losses resulting from the use of our services.</li>
          </ul>
        </div>

        {/* Termination */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Termination</h2>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate your access to our services if you violate these terms.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
          <p className="text-gray-600">
            For any questions about these terms, contact us at <a href="mailto:support@automatedtaxusa.com" className="text-blue-600 underline">support@automatedtaxusa.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
