import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-gray-800">
        Page Not Found
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-md">
        We couldn't find the page you're looking for. Let's get you back on track.
      </p>
      <div className="mt-8 space-x-4">
        <Link 
          href="/" 
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
        >
          Go Home
        </Link>
        <Link 
          href="/store" 
          className="bg-white text-gray-800 px-6 py-3 rounded-lg border border-gray-200 hover:shadow-lg transition-all"
        >
          Visit Store
        </Link>
      </div>
    </div>
  );
}