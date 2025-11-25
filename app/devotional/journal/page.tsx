'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define allowed moods
type Mood = 'hopeful' | 'grateful' | 'peaceful' | 'joyful' | 'reflective' | 'challenged';

// Type for journal entries
interface JournalEntry {
  id: number;
  date: string;
  title: string;
  verse: string;
  entry: string;
  mood: Mood;
}

export default function JournalPage() {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [newEntry, setNewEntry] = useState('');
  const [isWriting, setIsWriting] = useState(false);
  const [journalEntry, setJournalEntry] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('devotionalJournal') || '';
    }
    return '';
  });

  useEffect(() => {
    localStorage.setItem('devotionalJournal', journalEntry);
  }, [journalEntry]);

  const journalEntries: JournalEntry[] = [
    {
      id: 1,
      date: 'December 20, 2024',
      title: 'Walking in Faith',
      verse: 'Proverbs 3:5-6',
      entry: "Today's devotional about trusting in the Lord really spoke to my heart...",
      mood: 'hopeful',
    },
    {
      id: 2,
      date: 'December 19, 2024',
      title: "God's Unfailing Love",
      verse: 'Lamentations 3:22-23',
      entry: "What a beautiful reminder that God's mercies are new every morning...",
      mood: 'grateful',
    },
    {
      id: 3,
      date: 'December 18, 2024',
      title: 'Finding Peace',
      verse: 'Philippians 4:6-7',
      entry: 'Anxiety has been weighing on me lately, but this verse reminds me...',
      mood: 'peaceful',
    },
  ];

  const getMoodColor = (mood: Mood) => {
    switch (mood) {
      case 'hopeful':
        return 'bg-blue-100 text-blue-700';
      case 'grateful':
        return 'bg-green-100 text-green-700';
      case 'peaceful':
        return 'bg-purple-100 text-purple-700';
      case 'joyful':
        return 'bg-yellow-100 text-yellow-700';
      case 'reflective':
        return 'bg-indigo-100 text-indigo-700';
      case 'challenged':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleSaveEntry = () => {
    if (newEntry.trim()) {
      alert('Journal entry saved successfully!');
      setNewEntry('');
      setIsWriting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Prayer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Journal</span>
            </h1>
            <p className="text-xl text-gray-600">Document your spiritual journey and grow closer to God</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {!isWriting ? (
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Your Journal Entries</h2>
                    <button
                      onClick={() => setIsWriting(true)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all"
                    >
                      <i className="ri-add-line"></i> <span>New Entry</span>
                    </button>
                  </div>

                  <div className="space-y-6">
                    {journalEntries.map((entry) => (
                      <div key={entry.id} className="border border-gray-200 rounded-2xl p-6 hover:border-purple-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-purple-600 font-medium">{entry.verse}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMoodColor(entry.mood)}`}>{entry.mood}</span>
                          </div>
                          <span className="text-sm text-gray-500">{entry.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{entry.title}</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">{entry.entry}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Write New Entry</h2>
                    <button onClick={() => setIsWriting(false)} className="text-gray-500 hover:text-gray-700">
                      <i className="ri-close-line text-xl"></i>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <textarea
                      value={newEntry}
                      onChange={(e) => setNewEntry(e.target.value)}
                      placeholder="Write your thoughts, prayers, and reflections..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                      maxLength={1000}
                      rows={8}
                    />
                    <div className="text-right text-sm text-gray-500">{newEntry.length}/1000 characters</div>

                    <button
                      onClick={handleSaveEntry}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
                    >
                      Save Entry
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Journal Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Entries</span>
                    <span className="font-bold text-purple-600">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">This Month</span>
                    <span className="font-bold text-purple-600">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Current Streak</span>
                    <span className="font-bold text-purple-600">5 days</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Daily Verse</h3>
                <blockquote className="text-gray-700 italic mb-3">
                  "Trust in the Lord with all your heart and lean not on your own understanding."
                </blockquote>
                <cite className="text-purple-600 font-medium">Proverbs 3:5</cite>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Reflection Prompts</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    How did you see God working today?
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    What are you grateful for right now?
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    What prayer requests are on your heart?
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    How can you grow in faith this week?
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <section className="mt-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Keep Growing in Faith</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Regular journaling deepens your relationship with God and helps you see His faithfulness over time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/devotional" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                  Today's Devotional
                </Link>
                <Link href="/subscribe" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                  Get Daily Prompts
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
