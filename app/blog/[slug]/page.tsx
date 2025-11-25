import { notFound } from "next/navigation";
import { blogData } from "@/data/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostLayout from "./BlogPostLayout";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return notFound();

  const related = blogData
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <BlogPostLayout post={post} related={related} />
      <Footer />
    </>
  );
}