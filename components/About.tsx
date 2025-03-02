import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & Tax Consultant",
    image: "/img2.jpg",
  },
  {
    name: "Jane Smith",
    role: "Financial Advisor",
    image: "/img2.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Lead Accountant",
    image: "/img2.jpg",
  },
];

export default function AboutUs() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900">About Us</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We are a team of tax professionals dedicated to helping businesses navigate financial success.
        </p>
      </div>

      {/* Company Mission */}
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-green-900">Our Mission</h3>
        <p className="text-gray-700 mt-4">
          Our mission is to provide seamless tax solutions and financial consulting for businesses and individuals.
        </p>
      </div>

     
    </section>
  );
}
