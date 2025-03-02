import Image from "next/image";
import React from "react";

export default function Hero() {
 

   
    return (
        <section className="bg-green-50 flex items-center justify-center  pt-16 px-6">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-left max-w-lg space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        We Are Here To <br />
                        <span className="bg-yellow-300 px-2 inline-block">
                            Help You On Tax
                        </span>{" "}
                        Consultation.
                    </h1>

                    <p className="text-gray-700 text-lg">
                        Our tax preparation service has been serving the community for the
                        last 10 years. Get started with a free consultation!
                    </p>

                    <button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
                        Get a Free Consultation
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">
                
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center">
                        <span className="text-xl">⚖️</span>
                    </div>


                    <div className="relative">
                        
                        <Image src="/image.png" alt="Tax Consultant" width={600} height={600} className="rounded-lg" />

                    </div>

                    
                </div>
            </div>
        </section>
    );
}
