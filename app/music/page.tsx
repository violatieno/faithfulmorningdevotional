"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { songs } from "@/data/music";
import { musicText } from "@/data/musicText";

export default function MusicPage() {
  const [selectedSong, setSelectedSong] = useState<number | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const song = selectedSong ? songs.find((s) => s.id === selectedSong) : null;
  const text = selectedSong ? musicText[selectedSong] : null;

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|v=)([^&]+)/);
    return match ? match[1] : null;
  };

  const closeModal = () => {
    if (iframeRef.current) {
      iframeRef.current.src = "";
    }
    setSelectedSong(null);
  };

  useEffect(() => {
    if (iframeRef.current && song) {
      const videoId = getYouTubeId(song.audioUrl);
      if (videoId) {
        iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }
    }
  }, [song]);

  return (
    <>
      <Header />

      {/* Added top padding to account for fixed header */}
      <main className="min-h-screen pt-28 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Worship Music</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Experience the presence of God through worship that speaks to the soul.
          </p>

          {/* Song Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {songs.map((song) => (
              <div
                key={song.id}
                onClick={() => setSelectedSong(song.id)}
                className="cursor-pointer group bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={song.image}
                    alt={song.title}
                    fill
                    className="object-cover group-hover:opacity-90 transition"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-1">{song.title}</h2>
                  <p className="text-gray-500 text-sm">{song.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {song && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-6xl relative p-8 overflow-y-auto max-h-[90vh]">
              <button
                onClick={closeModal}
                className="absolute top-3 right-5 text-gray-600 dark:text-gray-300 hover:text-red-500 text-3xl font-bold"
              >
                &times;
              </button>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src={song.image}
                    alt={song.title}
                    width={320}
                    height={320}
                    className="rounded-xl object-cover"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <h2 className="text-3xl font-bold mb-1">{song.title}</h2>
                  <p className="text-gray-500 mb-3">{song.artist}</p>

                  {text && (
                    <div className="space-y-3 text-sm leading-relaxed">
                      <p><strong>Scripture:</strong> {text.scripture}</p>
                      <p><strong>Reflection:</strong> {text.reflection}</p>
                      <p><strong>Why It Matters:</strong> {text.why}</p>
                    </div>
                  )}

                  <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      ref={iframeRef}
                      width="100%"
                      height="420"
                      title={song.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-xl"
                    ></iframe>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href="/devotional"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition"
                    >
                      Read Today’s Devotional
                    </Link>

                    <div className="flex gap-3">
                      <Link
                        href="/subscribe"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-xl transition"
                      >
                        Subscribe
                      </Link>
                      <button
                        onClick={closeModal}
                        className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-xl transition"
                      >
                        Back to Music
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
