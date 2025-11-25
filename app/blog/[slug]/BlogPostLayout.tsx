'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import type { BlogPost } from "@/data/blogData";

interface BlogPostLayoutProps {
  post: BlogPost;
  related: BlogPost[];
}

export default function BlogPostLayout({ post, related }: BlogPostLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-28 pb-16 px-6">
      {/* Hero Section */}
      <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg mb-10 max-w-5xl mx-auto">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-200">{post.date}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>

          {/* External Links Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 mb-12">

            {/* Trending Links */}
            {post.trendingLinks && post.trendingLinks.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                  External Resources
                </h3>
                <ul className="space-y-3">
                  {post.trendingLinks.map((link, index) => (
                    <li key={index} className="space-y-1">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {link.title}
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400 pl-6">
                        {link.url}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            ← Back to Blog
          </Link>
        </motion.div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-6xl mx-auto mt-20"
        >
          <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group block"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
                  <div className="relative h-48">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-purple-600 transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{r.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      )}
    </main>
  );
}