import { notFound } from 'next/navigation';
import devotionals from '../../../data/devotionals';

export async function generateStaticParams() {
  return devotionals.map((devotional) => ({
    slug: devotional.slug,
  }));
}

export default function DevotionalDetailPage({ params }: { params: { slug: string } }) {
  const devotional = devotionals.find((d) => d.slug === params.slug);

  if (!devotional) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-6 py-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{devotional.title}</h1>
        <p className="text-purple-600 font-medium mb-4">{devotional.reference}</p>
        <blockquote className="italic text-lg text-purple-800 mb-6">
          "{Object.values(devotional.versions)[0]}"
        </blockquote>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Reflection</h2>
          <p>{devotional.reflection}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Prayer</h2>
          <p className="italic">{devotional.prayer}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Journal Prompt</h2>
          <p>{devotional.prompt}</p>
        </section>
      </div>
    </div>
  );
}
