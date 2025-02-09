import React from "react";

export default function Hero() {
    return (
        <section className="bg-green-50 flex items-center justify-center pt-16 px-6 ">
            <div className=" max-w-7xl flex flex-col items-center justify-between md:flex-row gap-12  ">
                {/* Left Content */}
                <div className="text-left max-w-lg">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ">
                        We Are Here To <br />
                        <span className="bg-yellow-300 leading-snug px-2">Help You On Tax</span>
                        <br /> Consultation.
                    </h1>

                    <p className="text-gray-700 mt-4 text-lg">
                        Our tax preparation service has been serving the community for the
                        last 10 years. Get started with a free consultation!
                    </p>
                    <button className="mt-6 bg-black text-white px-6 py-3 text-lg font-semibold rounded shadow hover:bg-gray-800 transition">
                        Get a Free Consultation
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center">
                        <span className="text-xl">⚖️</span>
                    </div>
                    <div className="relative">
                        <div className="absolute -z-10 top-4 left-4 bg-yellow-300 w-72 h-72 rounded-full"></div>
                        <img
                            src="/hero.png"
                            alt="Tax Consultant"
                            className=" rounded-lg"
                        />
                    </div>
                    <div className="absolute bottom-0 right-0 w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
                        <span className="text-xl">📊</span>
                    </div>
                </div>
            </div>
        </section>
    );
}