import { notFound } from "next/navigation";
import Link from "next/link";
import { worshipResources } from "@/data/worship";
import { worshipText } from "@/data/worshipText";

interface WorshipDetailPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return worshipResources.map((resource) => ({ id: resource.id.toString() }));
}

export default function WorshipDetailPage({ params }: WorshipDetailPageProps) {
  const id = parseInt(params.id, 10);
  const resource = worshipResources.find((r) => r.id === id);
  if (!resource) return notFound();

  const nextIndex = (worshipResources.findIndex(r => r.id === id) + 1) % worshipResources.length;
  const nextResource = worshipResources[nextIndex];

  const text = worshipText[id];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center text-indigo-700 dark:text-indigo-400">
        {resource.title}
      </h1>

      {/* Image */}
      <img src={resource.image} alt={resource.title} className="w-full rounded-xl shadow-lg mb-6" />

      {/* Scripture */}
      <div className="bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded-xl shadow mb-6">
        <p className="text-lg text-gray-700 dark:text-gray-200">{text.scripture}</p>
      </div>

      {/* Reflection */}
      <div className="prose prose-indigo dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">
          Reflection
        </h2>
        <p>{text.reflection}</p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link href="/worship" className="px-6 py-3 bg-gray-200 rounded-xl shadow hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
          ← Back to Worship
        </Link>
        <Link href={`/worship/${nextResource.id}`} className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700">
          Next: {nextResource.title} →
        </Link>
      </div>

      {/* Subscribe / Devotional */}
      <div className="flex justify-center gap-6 mt-10">
        <Link href="/subscribe" className="px-6 py-3 bg-indigo-500 text-white rounded-xl shadow hover:bg-indigo-600">
          Subscribe
        </Link>
        <Link href="/devotional" className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow hover:bg-purple-700">
          Read Today’s Devotional
        </Link>
      </div>
    </div>
  );
}
