import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-center">
          Welcome to <strong>Automated Tax USA</strong>. We are committed to protecting your privacy and ensuring that your personal information is handled securely and transparently.
        </p>

        {/* Information We Collect */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Personal Information:</strong> Name, email, phone number, business details, and payment information.</li>
            <li><strong>Financial Data:</strong> Bank account details, invoices, tax documents, and transaction records.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, and interactions with our website.</li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Provide automated bookkeeping and tax services.</li>
            <li>Process payments and manage billing.</li>
            <li>Improve website functionality and security.</li>
            <li>Comply with legal obligations and tax regulations.</li>
          </ul>
        </div>

        {/* Data Sharing & Security */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Data Sharing & Security</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>We do not sell or share your personal data with third parties except for service providers assisting us (e.g., payment processors, tax authorities).</li>
            <li>We implement security measures such as encryption and access controls to protect your data.</li>
          </ul>
        </div>

        {/* Your Rights */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Your Rights</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of marketing communications.</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">
            For privacy-related inquiries, contact us at <a href="mailto:support@automatedtaxusa.com" className="text-blue-600 underline">support@automatedtaxusa.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
