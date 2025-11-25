'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: 'ri-home-4-line' },
    { href: '/devotional', label: 'Devotional', icon: 'ri-sun-line' },
    { href: '/worship', label: 'Worship', icon: 'ri-music-2-line' },
    { href: '/music', label: 'Music', icon: 'ri-headphone-line' },
    { href: '/blog', label: 'Blog', icon: 'ri-article-line' },
    { href: '/store', label: 'Store', icon: 'ri-shopping-bag-3-line' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Site Name */}
            <Link href="/" className="flex items-center space-x-2 group" aria-label="Faithful Morning Devotionals Home">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center shadow group-hover:scale-110 transition-transform animate-pulse">
                    <i className="ri-book-open-line text-white text-lg" aria-hidden="true"></i>
                  </div>
                  <span className="text-2xl font-pacifico bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent drop-shadow-sm group-hover:drop-shadow-lg transition-all">
                    Faithful Morning
                  </span>
                </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center space-x-1 font-medium transition-colors px-2 py-1
                  ${pathname === link.href
                    ? 'text-purple-700'
                    : 'text-gray-600 hover:text-purple-600'}
                  group`}
              >
                <i className={`${link.icon}`}></i>
                <span>{link.label}</span>
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full rounded transition-all duration-500
                    ${pathname === link.href
                      ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 opacity-100 scale-x-100'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'}
                  `}
                />
              </Link>
            ))}
            
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-gray-600`} aria-hidden="true"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50 transform transition-all duration-500 ease-in-out
            ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}
          `}
        >
          <nav className="flex flex-col p-4 space-y-3" role="navigation" aria-label="Mobile navigation">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center space-x-2 py-2 transition-colors
                  ${pathname === link.href ? 'text-purple-700 font-semibold' : 'text-gray-600 hover:text-purple-600'}
                `}
              >
                <i className={link.icon}></i>
                <span>{link.label}</span>
              </Link>
            ))}
            <Link href="/subscribe" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-center font-semibold flex items-center justify-center space-x-2">
              <i className="ri-mail-send-line"></i>
              <span>Subscribe</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
