'use client'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className="bg-green-50 py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-bold text-gray-900">
                    <a href="/">Automated Usa</a>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <a href="/services">Services</a>
                    <a href="/blog">Blogs</a>
                    <a href="/location">Location</a>
                    <a href="/contact">Contact Us</a>
                   
                </nav>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-700">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Button */}
                <a
                    href="#"
                    className="bg-black text-white px-4 py-2 rounded-md hidden md:flex hover:bg-gray-800 transition"
                >
                    Book Consultation
                </a>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-green-50 p-4 absolute top-16 left-0 right-0 shadow-lg">
                    <nav className="space-y-4 text-gray-700 font-medium">
                        <a href="/services" className="block">Services</a>
                        <a href="/blog" className="block">Blogs</a>
                        <a href="/location">Location</a>
                        <a href="/contact" className="block">Contact Us</a>
                        
                        
                        <a
                            href="#"
                            className="bg-black text-white px-4 block  py-2 rounded-md  hover:bg-gray-800 transition"
                        >
                            Book Consultation
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
