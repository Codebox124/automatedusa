import React from "react";

export default function ContactSupportPage() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-900">Contact & Support</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Need help? Reach out to our support team for assistance.
                </p>
            </div>

            {/* Contact Information */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {[
                    { title: "Email Us", detail: "admin@automatedtaxusa.com" },
                    { title: "Call Us", detail: "+1 469 682 5590" },
                    // { title: "Live Chat", detail: "Chat with an agent 24/7" },
                ].map((item, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg text-center shadow-md">
                        <h4 className="text-lg font-semibold text-green-900">{item.title}</h4>
                        <p className="text-gray-700">{item.detail}</p>
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <div className="mt-12 max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-green-900 text-center">Send a Message</h3>
                <form className="mt-6 space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-green-600"
                    ></textarea>
                    <button className="w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
