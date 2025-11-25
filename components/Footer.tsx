'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Mission */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="ri-book-open-line text-white text-2xl"></i>
              </div>
              <span className="font-pacifico text-2xl tracking-wide drop-shadow">Faithful Morning Devotionals</span>
            </div>
            <p className="text-gray-200 text-base leading-relaxed">
              <span className="font-semibold text-purple-300">Faithful Morning Devotionals</span> brings you closer to God through daily inspiration, worship, and spiritual growth.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors shadow">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors shadow">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors shadow">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors shadow">
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>

          {/* Devotional Links */}
          <div>
            <h4 className="font-bold mb-5 text-purple-200 uppercase tracking-wide">Devotional</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/devotional" className="hover:text-purple-400 transition-colors flex items-center space-x-2">
                  <i className="ri-sun-line"></i>
                  <span>Today's Reading</span>
                </Link>
              </li>
              <li>
                <Link href="/devotional/archive" className="hover:text-purple-400 transition-colors flex items-center space-x-2">
                  <i className="ri-archive-line"></i>
                  <span>Archive</span>
                </Link>
              </li>
              <li>
                <Link href="/devotional/journal" className="hover:text-purple-400 transition-colors flex items-center space-x-2">
                  <i className="ri-booklet-line"></i>
                  <span>Prayer Journal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-bold mb-5 text-purple-200 uppercase tracking-wide">Community</h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/worship" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="ri-music-2-line"></i>
                  <span>Worship</span>
                </Link>
              </li>
              <li>
                <Link href="/music" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="ri-headphone-line"></i>
                  <span>Music</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors flex items-center space-x-2">
                  <i className="ri-article-line"></i>
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Subscribe */}
          <div>
            <h4 className="font-bold mb-5 text-purple-200 uppercase tracking-wide">Connect</h4>
            <div className="mb-6">
              <Link href="/subscribe" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full text-white font-semibold shadow hover:scale-105 transition-transform">
                <i className="ri-mail-send-line mr-2"></i>
                Subscribe Now
              </Link>
            </div>
            <p className="text-gray-300 text-sm">
              Get daily devotionals, worship music, and community updates delivered to your inbox.
            </p>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-12 pt-8 text-center text-sm text-gray-300">
          <p>
            &copy; 2025 <span className="font-semibold text-purple-400">Faithful Morning Devotionals</span>. All rights reserved.<br />
            <span className="italic text-purple-200">Spreading God's love through His word.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}