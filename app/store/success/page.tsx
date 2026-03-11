export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-indigo-950 text-white">
      <i className="ri-checkbox-circle-fill text-6xl text-green-500 mb-4"></i>
      <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-indigo-200 mb-8">Thank you for your purchase from Faithful Morning.</p>
      <a href="/store" className="bg-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-500 transition-all">
        Back to Store
      </a>
    </div>
  );
}