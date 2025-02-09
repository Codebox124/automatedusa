import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold">Automated Usa</h3>
          <p className="mt-2 text-gray-300">
            Providing expert tax, bookkeeping, and business consulting services.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div>
          <h4 className="text-lg font-semibold">Legal & Compliance</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Disclaimer</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          </div>
          <p className="mt-4 text-gray-300">📧 support@yourcompany.com</p>
          <p className="text-gray-300">📞 +1 (555) 123-4567</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-gray-400">© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}
