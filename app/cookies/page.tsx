import React from "react";

export default function CookiePolicy() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Cookie Policy
        </h1>

        <p className="text-gray-600 text-center">
          This Cookie Policy explains how we use cookies and how you can manage them.
        </p>

        {/* How We Use Cookies */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">How We Use Cookies</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Remember user preferences and login details.</li>
            <li>Analyze website traffic and performance.</li>
            <li>Improve website security.</li>
          </ul>
        </div>

        {/* Types of Cookies */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Types of Cookies We Use</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><strong>Essential Cookies:</strong> Necessary for website functionality.</li>
            <li><strong>Analytics Cookies:</strong> Help us track and improve user experience.</li>
            <li><strong>Marketing Cookies:</strong> Used for targeted advertisements (if applicable).</li>
          </ul>
        </div>

        {/* Managing Cookies */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-800">Managing Cookies</h2>
          <p className="text-gray-600">
            You can control or delete cookies through your browser settings. Disabling cookies may affect website functionality.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">
            For any cookie-related inquiries, contact us at <a href="mailto:support@automatedtaxusa.com" className="text-blue-600 underline">support@automatedtaxusa.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
