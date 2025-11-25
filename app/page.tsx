'use client'; // This is good, explicitly stating client-side rendering
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Framer Motion is a great choice for lovely animations!
import { devotionals } from '../data/homedevotional';

/**
 * Renders the Home page of the Faithful Morning Christian Devotional Website.
 * This component displays a hero section, daily verse, feature grid, and a call to action.
 */
export default function Home() {
  /**
   * Calculates the index for today's devotional based on the day of the year.
   * Ensures a rotating display of devotionals throughout the year.
   * @returns {number} The index of the devotional for the current day.
   */
  const getTodayIndex = (): number => {
    const now = new Date();
    // Get the start of the current year
    const startOfYear = new Date(now.getFullYear(), 0, 1); // Changed 0,0 to 0,1 for more accurate day 1
    const diff = now.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    // Use modulo to cycle through available devotionals
    return dayOfYear % devotionals.length;
  };
  const today = devotionals[getTodayIndex()];

  // Feature data structured cleanly, good for maintainability
const features = [
  {
    title: "Daily Devotionals",
    description: "Start every morning with scripture, reflection, and guided prayer.",
    icon: "ri-sun-line",
    link: "/devotional",
    image: "/images/devotional.jpg"
  },
  {
    title: "Worship & Praise",
    description: "Soak in curated worship moments, playlists, and live sessions.",
    icon: "ri-music-2-line",
    link: "/worship",
    image: "/images/worship.jpg"
  },
  {
    title: "Christian Music",
    description: "Discover spirit-filled gospel, instrumentals, and playlists.",
    icon: "ri-headphone-line",
    link: "/music",
    image: "/images/music.png"
  },
  {
    title: "Faith Articles & Blog",
    description: "Read biblical insights, teachings, testimonies & faith stories.",
    icon: "ri-article-line",
    link: "/blog",
    image: "/images/blog.png"
  }
];
  // Stats data also well-structured
  const stats = [
    {
      number: '10,000+',
      label: 'Daily Readers',
      color: 'text-purple-200',
    },
    {
      number: '365',
      label: 'Days of Content',
      color: 'text-pink-200',
    },
    {
      number: '5★',
      label: 'User Rating',
      color: 'text-orange-200',
    },
  ];

  return (
    // Semantic className for overall layout
    <div className="faithful-morning-home min-h-screen bg-gradient-to-br from-purple-50 via-pink-100 to-orange-50">
      <Header />

      <main>
        <section className="hero-section relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/blog/living-in-worship.jpg"
              alt="Peaceful landscape with morning light, symbolizing spiritual awakening"
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
      
          <div className="absolute inset-0 bg-black/20" />

          {/* Hero Content: Centered and animated */}
          <div className="relative max-w-5xl mx-auto text-center z-10 pt-20 backdrop-blur-md bg-black/30 rounded-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-lg mb-8 leading-tight"
            >
              Start Your Day with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-orange-200 font-['Pacifico'] mt-4">
                God’s Word
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join thousands in daily devotionals, worship, and spiritual growth.
              Experience God’s love through His word every day.
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link
                href="/devotional"
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Today’s Devotional
              </Link>
              <Link
                href="/subscribe"
                className="bg-white/90 backdrop-blur-sm text-purple-700 px-12 py-5 rounded-full text-xl font-semibold border-2 border-purple-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all"
              >
                Subscribe Free
              </Link>
            </motion.div>

            {/* Stats Section: Informative and engaging */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, i) => ( // Using the 'stats' array defined above
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

              {/* Verse of the Day Section - ENHANCED */}
                <section className="verse-of-day-section py-24 px-4"> {/* Added light background to section */}
                  <div className="max-w-5xl mx-auto"> {/* Increased max-width */}
                    {/* CONTAINER: Changed background, border, and added a stronger shadow */}
                    <div className="bg-beige rounded-3xl p-8 md:p-16 shadow-2xl border-t-8 border-purple-900 via pink-900 relative overflow-hidden">
                      {/* Optional: Add a subtle graphic/icon for theme */}
                      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        {/* Placeholder for a faint cross or dove icon */}
                        <svg className="w-24 h-24 text-purple-900" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5A.5.5 0 0110 2zM5.5 8.5a.5.5 0 01.5-.5h4a.5.5 0 010 1H6a.5.5 0 01-.5-.5zm4 4a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM10 18a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zM15 8.5a.5.5 0 01-.5.5h-4a.5.5 0 010-1h4a.5.5 0 01.5.5z"></path></svg>
                      </div>

                      <div className="text-center relative z-10">
                        {/* HEADING: Bolder and more contrasted */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-8 tracking-tight uppercase">
                          Verse of the Day
                        </h2>
                        {/* VERSE: Increased size, bolded, and changed color for impact */}
                        <blockquote className="text-3xl md:text-4xl text-gray-800 leading-snug mb-8 font-bold italic border-l-4 border-pink-500 pl-4 mx-auto max-w-3xl">
                          "{today.verse}"
                        </blockquote>
                        {/* REFERENCE: Bolder and highly visible */}
                        <cite className="text-xl md:text-2xl font-black text-pink-600 block mb-10">
                          — {today.reference}
                        </cite>
                        <div className="mt-10">
                          {/* CTA: Larger button, more distinct gradient, and stronger hover effect */}
                          <Link
                            href="/devotional"
                            className="inline-block bg-gradient-to-r from-purple-700 to-pink-500 text-white px-10 py-4 rounded-full text-xl font-bold uppercase tracking-wider shadow-2xl hover:shadow-purple-400/50 hover:scale-105 transition-all duration-300 transform"
                          >
                            Read Today’s Devotional
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

           {/* Features Grid Section */}
                <section className="features-grid-section py-20 px-4">
                  <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                      <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        Grow Your Faith Daily
                      </h2>
                      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Everything you need for your spiritual journey in one place
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {features.map((f, i) => (
                        <Link key={i} href={f.link} className="group block">
                          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">

                            {/* Background Image */}
                            <div
                              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                              style={{ backgroundImage: `url(${f.image})` }}
                            />

                            {/* White → Transparent overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                                <i className={`${f.icon} text-purple-600 text-xl`} />
                              </div>

                              <h3 className="text-lg font-bold text-gray-900 mb-1">
                                {f.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {f.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
           {/* Call to Action Section - ENHANCED FOR LEGIBILITY */}
      <section className="cta-section py-24 px-4 rounded-2xl" >
        <div className="max-w-5xl mx-auto text-center"> 
          <div className="bg-gradient-to-r rounded-3xl border-t-8 from-purple-900 via-blue-900 to-purple-900 rounded-4xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight tracking-tight text-shadow-sm">
                Ready to Deepen Your Faith Journey?
              </h2>
              <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95 max-w-2xl mx-auto">
                Join our vibrant community today and receive daily inspiration, devotionals, and resources directly to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                <Link
                  href="/subscribe"
                  className="inline-block bg-white text-purple-700 px-10 py-5 rounded-full text-xl font-bold uppercase shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                >
                  Start Your Free Trial
                </Link>
                <Link
                  href="/worship"
                  className="inline-block border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300"
                >
                  Explore Worship Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}