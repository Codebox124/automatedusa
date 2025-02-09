import { notFound } from "next/navigation";

type BlogDetailProps = {
  params: { slug: string };
};

const blogPosts = [
  {
    slug: "essential-tax-tips",
    title: "5 Essential Tax Tips for Small Businesses",
    content: "Full content for 5 Essential Tax Tips for Small Businesses...",
    image: "/img1.jpg",
  },
  {
    slug: "bookkeeping-best-practices",
    title: "Bookkeeping Best Practices for Startups",
    content: "Full content for Bookkeeping Best Practices for Startups...",
    image: "/img1.jpg",
  },
  {
    slug: "new-tax-law-2024",
    title: "New Tax Law Changes You Should Know in 2024",
    content: "Full content for New Tax Law Changes You Should Know in 2024...",
    image: "/img1.jpg",
  },
];

export default function BlogDetail({ params }: BlogDetailProps) {
  const blog = blogPosts.find((post) => post.slug === params.slug);

  if (!blog) return notFound(); // Show 404 page if blog is not found

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-3xl font-bold text-green-900 mt-6">{blog.title}</h1>
        <p className="text-gray-700 mt-4">{blog.content}</p>
        <a href="/blog" className="mt-6 inline-block bg-green-700 text-white px-6 py-2 rounded-lg">
          Back to Blog
        </a>
      </div>
    </section>
  );
}
