import React from "react";

export default function Header() {
    return (
        <header className="bg-green-50 py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-bold text-gray-900">
                    <a href="/">
                        Automated Usa</a>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">

                    <a href="/services">Services</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/blog">Blogs</a>
                </nav>

                {/* Button */}
                <a
                    href="#"
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                >
                    Book Consultation
                </a>
            </div>
        </header>
    );
}
