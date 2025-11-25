'use client';

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { worshipResources } from "@/data/worship";
import { worshipText } from "@/data/worshipText";

export default function WorshipPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeResource, setActiveResource] = useState<number | null>(null);

  const openModal = (id: number) => {
    setActiveResource(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setActiveResource(null);
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Header />

      <main className="pt-20 pb-16">
        <section className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-indigo-700 dark:text-indigo-400">
            Worship Resources
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {worshipResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
                onClick={() => openModal(resource.id)}
              >
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{resource.category}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {modalOpen && activeResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full overflow-y-auto max-h-[90vh] shadow-xl">
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
                  {worshipResources.find(r => r.id === activeResource)?.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-indigo-600 text-2xl font-bold"
                >             
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Resource Image */}
                <img
                  src={worshipResources.find(r => r.id === activeResource)?.image}
                  alt={worshipResources.find(r => r.id === activeResource)?.title}
                  className="w-full h-64 object-cover rounded-xl"
                />

                {/* Scripture */}
                <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-4 rounded-xl">
                  <p className="text-gray-700 dark:text-gray-200">
                    <span className="font-semibold">Scripture:</span>{" "}
                    {worshipText[activeResource].scripture}
                  </p>
                </div>

                {/* Reflection */}
                <div className="prose prose-indigo dark:prose-invert">
                  <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
                    Reflection
                  </h3>
                  <p>{worshipText[activeResource].reflection}</p>
                </div>

                {/* Why it matters */}
                <div className="prose prose-indigo dark:prose-invert">
                  <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400">
                    Why It Matters
                  </h3>
                  <p>{worshipText[activeResource].why}</p>
                </div>

                <div className="flex justify-end mt-6 space-x-4">
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition"
                  >
                    Back to Worship
                  </button>
                  <a
                    href="/"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
