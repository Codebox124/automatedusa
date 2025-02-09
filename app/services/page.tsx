import React from "react";
import Image from "next/image";

export default function ServicesPage() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-900">Our Services</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    We provide expert financial services to help businesses stay compliant and grow.
                </p>
            </div>

            {/* Service Sections */}
            <div className="mt-12 space-y-12 max-w-6xl mx-auto">
                {/* Tax Services */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full h-80">
                        <Image src="/img1.jpg" alt="Tax Services" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-green-900 mt-2">Tax Services</h3>
                        <p className="text-gray-600 mt-2">
                            We ensure compliance with tax regulations and help businesses optimize their tax strategies. Our tax experts provide guidance on deductions, tax credits, and efficient tax structures, helping you maximize savings and reduce liabilities.
                        </p>
                    </div>
                </div>

                {/* Bookkeeping Services */}
                <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                    <div className="relative w-full h-80">
                        <Image src="/img1.jpg" alt="Bookkeeping Services" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-green-900 mt-2">Bookkeeping Services</h3>
                        <p className="text-gray-600 mt-2">
                            We manage financial records, transactions, and ensure accurate financial reporting. Our bookkeeping services include tracking income and expenses, reconciling accounts, preparing financial statements, and maintaining compliance with financial regulations.
                        </p>
                    </div>
                </div>

                {/* Integration Services */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full h-80">
                        <Image src="/img1.jpg" alt="Integration Services" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-green-900 mt-2">Integration Services</h3>
                        <p className="text-gray-600 mt-2">
                            We integrate financial software, accounting tools, and tax solutions seamlessly. Our integration services help streamline workflows, improve efficiency, and ensure that all your financial data is synchronized and easily accessible across platforms.
                        </p>
                    </div>
                </div>

                {/* Business Consulting */}
                <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                    <div className="relative w-full h-80">
                        <Image src="/img1.jpg" alt="Business Consulting" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-green-900 mt-2">Business Consulting</h3>
                        <p className="text-gray-600 mt-2">
                            We provide expert advice to help businesses improve operations, finance, and growth. Our consulting services include strategic planning, financial forecasting, process optimization, and risk management, helping you make informed business decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
