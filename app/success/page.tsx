export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="p-8 bg-white shadow rounded-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Subscription Successful!</h1>
        <p className="text-gray-700">Thank you for subscribing. Check your email for confirmation.</p>
      </div>
    </div>
  );
}
