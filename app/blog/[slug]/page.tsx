import { notFound } from "next/navigation";

interface BlogDetailProps {
  params: { slug: string };
}

const blogPosts = [
  { slug: "essential-tax-tips", title: "5 Essential Tax Tips", content: "Full content...", image: "/img1.jpg" },
  { slug: "bookkeeping-best-practices", title: "Bookkeeping Best Practices", content: "Full content...", image: "/img2.jpg" },
  { slug: "new-tax-law-2024", title: "New Tax Law Changes", content: "Full content...", image: "/img3.jpg" },
];

// ✅ Ensure `params` is handled correctly
export default async function BlogDetail({ params }: BlogDetailProps) {
  if (!params?.slug) return notFound(); // Ensure slug exists

  const blog = blogPosts.find((post) => post.slug === params.slug);
  if (!blog) return notFound();

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

// ✅ Add generateStaticParams (if using Static Site Generation)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
