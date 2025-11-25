'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import devotionals from '../../../data/devotionals';

export default function DevotionalArchivePage() {
  const [search, setSearch] = useState('');
  const [readDevotionals, setReadDevotionals] = useState<string[]>([]);

  const startDate = new Date('2025-07-22');
  const today = new Date();
  const daysSinceStart = Math.floor((today.setHours(0, 0, 0, 0) - startDate.getTime()) / 86400000);
  const todayIndex = daysSinceStart % devotionals.length;
  const todayDevotional = devotionals[todayIndex];

  useEffect(() => {
    const stored = localStorage.getItem('readDevotionals');
    if (stored) setReadDevotionals(JSON.parse(stored));
  }, []);

  const matchesSearch = (devotional: typeof devotionals[number]) =>
    devotional.title.toLowerCase().includes(search.toLowerCase()) ||
    devotional.reference.toLowerCase().includes(search.toLowerCase());

  const filtered = search ? devotionals.filter(matchesSearch) : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Devotional Archive</h1>
          <p className="text-gray-600">Search past devotionals or revisit today’s message</p>
        </div>

        <input
          type="text"
          placeholder="Search by title or scripture..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-200"
        />

        {search && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 col-span-full">No devotionals found.</p>
            )}
            {filtered.map((d) => (
              <Link href={`/devotional/${d.slug}`} key={d.slug} className="group">
                <div
                  className={`p-4 border rounded-xl shadow transition-all space-y-2 ${
                    readDevotionals.includes(d.slug)
                      ? 'bg-purple-50 border-purple-200'
                      : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <h3 className="text-lg font-bold text-gray-900">{d.title}</h3>
                  <p className="text-sm text-gray-600">{d.reference}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!search && todayDevotional && (
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-1">{todayDevotional.title}</h2>
              <p className="text-purple-600 font-medium text-sm mb-4">{todayDevotional.reference}</p>
              <blockquote className="italic text-purple-800 border-l-4 border-purple-300 pl-4">
                "{Object.values(todayDevotional.versions)[0]}"
              </blockquote>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Reflection</h3>
              <p className="text-gray-700 leading-relaxed">{todayDevotional.reflection}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Prayer</h3>
              <p className="text-gray-700 leading-relaxed">{todayDevotional.prayer}</p>
            </div>
            <Link
              href={`/devotional/${todayDevotional.slug}`}
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all"
            >
              Read Full Devotional
            </Link>
          </div>
        )}

        <div className="text-center mt-8">
          <Link
            href="/devotional"
            className="inline-block text-purple-600 hover:underline font-medium"
          >
            ← Back to Today's Devotional
          </Link>
        </div>
      </div>
    </div>
  );
}
