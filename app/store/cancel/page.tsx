import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-indigo-900/40 backdrop-blur-md p-8 rounded-3xl border border-indigo-700 text-center shadow-2xl">
        <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="ri-error-warning-line text-4xl text-amber-500"></i>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-4">Payment Cancelled</h1>
        
        <p className="text-indigo-200 mb-8 leading-relaxed">
          No worries! Your order hasn't been processed. If you had trouble with your card, feel free to try M-PESA instead.
        </p>

        <div className="space-y-4">
          <Link 
            href="/store" 
            className="block w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all"
          >
            Return to Store
          </Link>
          
          <Link 
            href="/contact" 
            className="block w-full py-2 text-indigo-400 hover:text-white transition-colors text-sm"
          >
            Need help? Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}