'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Something went wrong!
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-md">
        We apologize for the inconvenience. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all"
      >
        Try again
      </button>
    </div>
  );
}