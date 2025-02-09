import React from "react";
import Link from "next/link";

const blogPosts = [
    {
        slug: "essential-tax-tips",
        title: "5 Essential Tax Tips for Small Businesses",
        description: "Learn how to maximize deductions and reduce tax liabilities with these expert tips.",
        category: "Tax Tips",
        image: "/img1.jpg",
        content: "Full content for 5 Essential Tax Tips for Small Businesses...",
    },
    {
        slug: "bookkeeping-best-practices",
        title: "Bookkeeping Best Practices for Startups",
        description: "A guide to keeping your financial records organized and accurate from day one.",
        category: "Bookkeeping",
        image: "/img1.jpg",
        content: "Full content for Bookkeeping Best Practices for Startups...",
    },
    {
        slug: "new-tax-law-2024",
        title: "New Tax Law Changes You Should Know in 2024",
        description: "Stay updated with the latest tax regulations and how they affect your business.",
        category: "Tax Laws",
        image: "/img1.jpg",
        content: "Full content for New Tax Law Changes You Should Know in 2024...",
    },
];

export default function BlogPage() {
    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-900">Blog & Resources</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Stay informed with the latest tax tips, bookkeeping guides, and regulatory updates.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {blogPosts.map((post) => (
                    <div key={post.slug} className="bg-white border rounded-lg shadow-md overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <span className="text-sm uppercase text-green-700 font-semibold">{post.category}</span>
                            <h3 className="text-xl font-bold text-green-900 mt-2">{post.title}</h3>
                            <p className="text-gray-600 mt-2">{post.description}</p>
                            <Link href={`/blog/${post.slug}`} className="text-green-700 font-medium mt-4 inline-block">
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
