import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StoreClient from './StoreClient';

export default function StorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-gray-100">
      
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-300 mb-4">
              Faith Store
            </h1>

            <p className="text-lg text-indigo-200">
              Wear your faith with inspirational Christian merchandise
            </p>
          </div>

          <StoreClient />

        </div>
      </main>

      <Footer />

    </div>
  );
}