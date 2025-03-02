import React, { useEffect, useState } from "react";

export default function Hero() {
    const images = [
        "/heroImg1.jpg",
        "/heroImg2.jpg",
        "/heroImg3.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="bg-green-50 flex items-center justify-center  py-16 px-6">
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
                    {/* Background Decorative Circles */}
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center">
                        <span className="text-xl">⚖️</span>
                    </div>

                    {/* <div className="relative w-72 h-72 overflow-hidden rounded-lg shadow-lg">
                        <div
                            className="w-full h-full bg-cover bg-center transition-opacity duration-1000"
                            style={{
                                backgroundImage: `url(${images[currentImage]})`,
                            }}
                        ></div>
                    </div> */}

                    <div className="relative">
                        <div className="absolute -z-10 top-4 left-4 bg-yellow-300 w-72 h-72 rounded-full"></div>
                        <img
                            src="/heroImg2.jpg"
                            alt="Tax Consultant"
                            className="rounded-lg shadow-lg"
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
