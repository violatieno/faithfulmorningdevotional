'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import devotional, { BibleVersion } from '../../data/devotionals';
import Link from 'next/link';
import parse from 'html-react-parser';

export default function DevotionalPage({ params }: { params: { slug: string } }) {
  const [selectedVersion, setSelectedVersion] = useState<BibleVersion>('NIV');
  const [journalEntry, setJournalEntry] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const startDate = new Date('2025-07-22');
  const today = new Date();
  const normalizedToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const normalizedStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const daysSinceStart = Math.floor((normalizedToday.getTime() - normalizedStartDate.getTime()) / (1000 * 60 * 60 * 24));
  const todayIndex = daysSinceStart % devotional.length;
  const todayDevotional = devotional[todayIndex];

  useEffect(() => {
    const savedEntry = localStorage.getItem(`journal-${normalizedToday.toISOString().split('T')[0]}`);
    if (savedEntry) setJournalEntry(savedEntry);
    setIsLoading(false);
  }, [normalizedToday]);

  const handleSaveEntry = async () => {
    if (!journalEntry.trim()) {
      toast.error('Please write something before saving');
      return;
    }

    setIsSaving(true);
    try {
      localStorage.setItem(`journal-${normalizedToday.toISOString().split('T')[0]}`, journalEntry);
      await new Promise(resolve => setTimeout(resolve, 500));
      toast.success('Journal entry saved successfully!');
    } catch (error) {
      toast.error('Failed to save entry. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) handleSaveEntry();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 flex items-center justify-center" role="status">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-400" />
        <span className="sr-only">Loading today's devotional...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-gray-100 backdrop-blur-sm">
      <Toaster position="top-center" />
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pt-24 pb-16 px-4 relative z-10"
        role="main"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 relative" role="banner">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-3xl opacity-30 blur-sm z-0"
              style={{ backgroundImage: 'url("/path/to/your/devotional-hero-bg.jpg")' }}
              aria-hidden="true"
            />
            <div className="relative z-10 p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg inline-block">
              <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4 drop-shadow-md">
                Today's Devotional
              </h1>
              <p className="text-xl md:text-2xl text-purple-200 font-medium">
                {normalizedToday.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
              className="bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-800 hover:bg-white/15 transition-transform duration-300 hover:shadow-purple-600/40"
              role="region"
              aria-label="Bible Verse"
            >
              <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                <h2 className="text-3xl font-bold text-purple-100 leading-tight drop-shadow-sm">{todayDevotional.title}</h2>
                <div className="flex items-center space-x-3">
                  <label htmlFor="version" className="text-base text-purple-300 font-medium">Version:</label>
                  <select
                    id="version"
                    value={selectedVersion}
                    onChange={(e) => setSelectedVersion(e.target.value as BibleVersion)}
                    className="bg-purple-900/40 text-purple-200 px-4 py-2 rounded-xl text-base font-semibold border-2 border-purple-700 focus:ring-2 focus:ring-purple-400 appearance-none"
                    aria-label="Select Bible version"
                  >
                    {Object.keys(todayDevotional.versions).map((version) => (
                      <option key={version} value={version}>
                        {version}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <blockquote className="text-2xl md:text-3xl text-purple-100 leading-relaxed mb-8 font-serif italic border-l-4 border-purple-400 pl-4">
                "{todayDevotional.versions[selectedVersion]}"
              </blockquote>

              <cite className="text-lg md:text-xl font-semibold text-purple-300 block text-right">
                — {todayDevotional.reference} ({selectedVersion})
              </cite>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
              className="bg-white/10 rounded-3xl p-8 md:p-10 shadow-lg border border-purple-800 hover:shadow-purple-600/40"
              role="region"
              aria-label="Reflection"
            >
              <h3 className="text-2xl font-bold text-purple-200 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4 shadow-md shadow-pink-500/30">
                  <i className="ri-lightbulb-line text-white text-xl" aria-hidden="true" />
                </div>
                Reflection
              </h3>
              <div className="text-purple-100 leading-relaxed text-lg prose max-w-none">
                {parse(todayDevotional.reflection)}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
              className="bg-white/10 rounded-3xl p-8 md:p-10 shadow-lg border border-purple-800 hover:shadow-purple-600/40"
              role="region"
              aria-label="Prayer"
            >
              <h3 className="text-2xl font-bold text-purple-200 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 shadow-md shadow-purple-500/30">
                  <i className="ri-hands-line text-white text-xl" aria-hidden="true" />
                </div>
                Prayer
              </h3>
              <div className="text-purple-100 leading-relaxed text-lg italic prose max-w-none">
                {parse(todayDevotional.prayer)}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
              className="bg-white/10 rounded-3xl p-8 md:p-10 shadow-lg border border-purple-800 hover:shadow-purple-600/40"
              role="region"
              aria-label="Journal"
            >
              <h3 className="text-2xl font-bold text-purple-200 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-center justify-center mr-4 shadow-md shadow-fuchsia-500/30">
                  <i className="ri-quill-pen-line text-white text-xl" aria-hidden="true" />
                </div>
                Journal Prompt
              </h3>
              <div className="text-purple-100 mb-8 text-lg prose max-w-none">
                {parse(todayDevotional.prompt)}
              </div>
              <textarea
                id="journal-entry"
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Reflect on today's devotional here... (Ctrl+Enter to save)"
                className="w-full h-40 p-5 border-2 border-purple-700 bg-purple-950/40 text-purple-100 rounded-xl resize-y outline-none focus:border-pink-400 focus:ring-4 focus:ring-purple-500/30 transition-all text-lg"
                maxLength={1000}
                disabled={isSaving}
                aria-label="Journal entry text area"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-purple-400 font-medium">
                  {journalEntry.length}/1000 characters
                </span>
                <button
                  onClick={handleSaveEntry}
                  disabled={isSaving}
                  className={`bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-pink-500/30 transition-all flex items-center gap-2 transform hover:scale-105 ${isSaving ? 'opacity-70 cursor-not-allowed' : 'shadow-md'}`}
                  aria-label={isSaving ? 'Saving journal entry, please wait' : 'Save your journal entry'}
                >
                  {isSaving ? (
                    <>
                      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <i className="ri-save-line text-lg" aria-hidden="true"></i> Save Entry
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
            role="navigation"
          >
            <Link
              href="/devotional/archive"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all text-center"
              aria-label="View devotional archive"
            >
              View Archive
            </Link>
            <Link
              href="/devotional/journal"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-pink-500/30 hover:scale-105 transition-all text-center"
              aria-label="Go to your personal journal"
            >
              My Journal
            </Link>
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}