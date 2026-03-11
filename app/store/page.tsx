'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState, useCallback } from 'react';
import productsDefault, { Product } from '../../data/product';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

/* -------------------------------------------------
   PAYMENT FUNCTIONS
--------------------------------------------------*/

async function payWithStripe(items: Product[]) {
  if (!items.length) throw new Error('Cart is empty');
  const res = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  });
  if (!res.ok) throw new Error(`Stripe error: ${await res.text()}`);
  const data = await res.json();
  if (data?.url) window.location.assign(data.url);
}

async function payWithPayHero(phone: string, amount: number, orderRef: string) {
  const res = await fetch('/api/payhero', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone: phone.replace(/\D/g, ''), amount, reference: orderRef }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || 'M-Pesa failed');
  return json;
}

/* -------------------------------------------------
   STORE PAGE COMPONENT
--------------------------------------------------*/

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<Product[]>([]);
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [mounted, setMounted] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', icon: 'ri-grid-line' },
    { id: 'tshirts', name: 'T-Shirts', icon: 'ri-shirt-line' },
    { id: 'hoodies', name: 'Hoodies', icon: 'ri-shirt-line' },
    { id: 'bags', name: 'Tote Bags', icon: 'ri-handbag-line' },
    { id: 'journals', name: 'Journals', icon: 'ri-book-line' },
    { id: 'mugs', name: 'Mugs', icon: 'ri-cup-line' },
  ];

  // 1. Initial Mount & Cart Load
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('faithfulCart');
    if (stored) {
      try { setCart(JSON.parse(stored)); } catch (e) { console.error('Cart error', e); }
    }
  }, []);

  // 2. Sync Cart to Storage
  useEffect(() => {
    if (mounted) localStorage.setItem('faithfulCart', JSON.stringify(cart));
  }, [cart, mounted]);

  // 3. Handlers
  const addToCart = (item: Product) => {
    setCart((prev) => [...prev, item]);
    toast.success(`${item.name} added!`);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const total = mounted 
    ? cart.reduce((sum, item) => sum + Number(item.price || 0), 0).toFixed(2)
    : "0.00";

  const handleMpesa = async () => {
    if (!phone) return toast.error("Enter phone number");
    setIsProcessing(true);
    try {
      const kes = Math.round(Number(total) * 130);
      await payWithPayHero(phone, kes, `FM-${Date.now()}`);
      toast.success("M-Pesa prompt sent!");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const filtered = selectedCategory === 'all' 
    ? productsDefault 
    : productsDefault.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-slate-900 text-gray-100">
      <Header />
      <Toaster position="top-right" />

      <main className="pt-24 pb-16 px-4 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
            Faith Store
          </h1>
          <p className="text-indigo-200 mt-2">Inspirational Christian Merchandise</p>
        </div>

        {/* Categories */}
        <div className="bg-indigo-950/30 rounded-2xl p-4 mb-8 backdrop-blur-sm grid grid-cols-2 md:grid-cols-6 gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-3 rounded-xl transition-all text-sm font-medium ${
                selectedCategory === cat.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-indigo-900/40 text-indigo-300'
              }`}
            >
              <i className={`${cat.icon} block text-lg mb-1`}></i>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((prod) => (
            <div key={prod.id} className="bg-indigo-950/30 rounded-3xl overflow-hidden border border-indigo-800/50 hover:-translate-y-1 transition-all backdrop-blur-sm">
              <img src={prod.image} alt={prod.name} className="w-full aspect-square object-cover" />
              <div className="p-6">
                <span className="text-xs text-indigo-400 font-medium uppercase">{prod.verse}</span>
                <h3 className="text-xl font-bold mt-1">{prod.name}</h3>
                <p className="text-indigo-200/70 text-sm mt-2 line-clamp-2">{prod.description}</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-2xl font-bold text-indigo-400">${prod.price}</span>
                  <button onClick={() => addToCart(prod)} className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Overlay */}
        {mounted && cart.length > 0 && (
          <div className="fixed bottom-6 right-6 w-80 bg-indigo-950/95 backdrop-blur-md p-6 rounded-3xl border border-indigo-700 shadow-2xl z-50">
            <div className="flex justify-between items-center mb-4 border-b border-indigo-800 pb-2">
              <h4 className="font-bold">Cart ({cart.length})</h4>
              <button onClick={() => setCart([])} className="text-xs text-indigo-400 hover:text-white">Clear All</button>
            </div>
            <div className="max-h-32 overflow-y-auto space-y-2 mb-4 scrollbar-hide">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between text-xs">
                  <span className="truncate w-40">{item.name}</span>
                  <div className="flex gap-2">
                    <span>${item.price}</span>
                    <button onClick={() => removeFromCart(i)} className="text-red-400">×</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total:</span>
              <span className="text-indigo-400">${total}</span>
            </div>
            <div className="space-y-3">
              <button onClick={() => payWithStripe(cart)} disabled={isProcessing} className="w-full bg-blue-600 py-3 rounded-xl font-bold disabled:opacity-50">
                Card Payment
              </button>
              <input 
                type="text" 
                placeholder="M-Pesa (254...)" 
                className="w-full bg-indigo-900/50 border border-indigo-700 p-3 rounded-xl text-sm focus:outline-none focus:border-indigo-500"
                onChange={(e) => setPhone(e.target.value)}
              />
              <button onClick={handleMpesa} disabled={isProcessing} className="w-full bg-green-600 py-3 rounded-xl font-bold disabled:opacity-50">
                {isProcessing ? 'Processing...' : 'Pay with M-Pesa'}
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/cart" className="text-indigo-400 underline hover:text-white transition-colors">
            View Full Cart Details
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}