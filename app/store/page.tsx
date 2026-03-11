'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState, useCallback } from 'react';
import productsDefault, { Product } from '../../data/product';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

/* -------------------------------------------------
   PAYMENT FUNCTIONS (CLIENT SIDE)
--------------------------------------------------*/

async function payWithStripe(items: Product[]) {
  if (!items || items.length === 0) throw new Error('Cart is empty');

  try {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Stripe checkout request failed: ${text}`);
    }

    const data = await res.json();
    if (data?.url) {
      window.location.assign(data.url);
    } else {
      throw new Error('Stripe session URL missing');
    }
  } catch (err) {
    console.error('payWithStripe error', err);
    throw err;
  }
}

async function payWithPayHero(phone: string, amount: number, orderRef: string) {
  const cleanPhone = phone.replace(/\D/g, '');
  if (!cleanPhone || cleanPhone.length < 9) {
    throw new Error('Please enter a valid M-Pesa phone number');
  }

  try {
    const res = await fetch('/api/payhero', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: cleanPhone,
        amount,
        reference: orderRef,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `Request failed with status ${res.status}`);
    }

    const json = await res.json();
    if (json.success) return json;
    throw new Error(json.error || 'Failed to initiate STK push');
  } catch (err: any) {
    console.error('payWithPayHero error:', err);
    throw err;
  }
}

/* -------------------------------------------------
   MAIN STORE PAGE
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

  // Handle Hydration and Load Cart
  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('faithfulCart');
      if (stored) setCart(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to load cart', e);
    }
  }, []);


  // Save Cart on Changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('faithfulCart', JSON.stringify(cart));
    }
  }, [cart, mounted]);

  const filteredProducts =
    selectedCategory === 'all'
      ? productsDefault
      : productsDefault.filter((p) => p.category === selectedCategory);

  const addToCart = (item: Product) => {
    setCart((prev) => [...prev, item]);
    toast.success(`${item.name} added to cart`);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  // Safe Total Calculation
  const total = mounted 
    ? Number(cart.reduce((sum, item) => sum + Number(item.price || 0), 0)).toFixed(2)
    : "0.00";
    
  const handleStripe = useCallback(async () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    setIsProcessing(true);
    try {
      await payWithStripe(cart);
    } catch (err: any) {
      toast.error(err?.message || 'Stripe checkout failed');
    } finally {
      setIsProcessing(false);
    }
  }, [cart]);

  const handleMpesa = useCallback(async () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const normalized = phone.replace(/\D/g, '');
    if (!/^\d{9,15}$/.test(normalized)) {
      toast.error('Enter a valid phone number (e.g. 07... or 254...)');
      return;
    }

    setIsProcessing(true);
    try {
      const amountInKes = Math.round(Number(total) * 130); 
      await payWithPayHero(normalized, amountInKes, 'FM-ORDER-' + Date.now());
      toast.success('M-PESA prompt sent! Please enter your PIN.');
    } catch (err: any) {
      toast.error(err?.message || 'M-PESA payment failed');
    } finally {
      setIsProcessing(false);
    }
  }, [phone, cart, total]);

  // Prevent rendering UI that depends on total/cart until mounted to avoid hydration flickers
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-gray-100">
      <Header />
      <Toaster position="top-right" />

      <main className="pt-24 pb-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-500/10 blur-2xl rounded-full opacity-70 -z-10" />
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300 mb-4 drop-shadow">
              Faith Store
            </h1>
            <p className="text-lg text-indigo-200">
              Wear your faith with inspirational Christian merchandise
            </p>
          </div>

          <div className="bg-indigo-950/30 rounded-2xl p-6 shadow-lg mb-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                      : 'bg-indigo-950/40 text-indigo-300 hover:bg-indigo-900/40 hover:text-white'
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <i className={`${category.icon} text-xl`}></i>
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-indigo-950/30 rounded-3xl overflow-hidden shadow-xl hover:shadow-indigo-700/30 hover:-translate-y-1 transition-all backdrop-blur-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-6">
                  <span className="text-sm text-indigo-300 font-medium block mb-3">
                    {prod.verse}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{prod.name}</h3>
                  <p className="text-indigo-200 text-sm mb-4">{prod.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-400">
                      ${Number(prod.price).toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(prod)}
                      className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all flex items-center space-x-2"
                    >
                      <i className="ri-shopping-cart-line"></i>
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {mounted && cart.length > 0 && (
            <div className="fixed bottom-8 right-8 bg-indigo-950/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl max-w-sm text-indigo-100 z-50 border border-indigo-800">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-white">Cart ({cart.length})</h4>
                <button onClick={() => setCart([])} className="text-sm text-indigo-300 hover:text-white">Clear</button>
              </div>

              <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm group">
                    <span className="truncate">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">${Number(item.price).toFixed(2)}</span>
                      <button onClick={() => removeFromCart(index)} className="text-red-400 opacity-0 group-hover:opacity-100">×</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-indigo-800 pt-4">
                <div className="flex justify-between mb-4">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-indigo-300">${total}</span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleStripe}
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-3 rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : 'Pay with Card (Stripe)'}
                  </button>

                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter M-PESA Phone (254...)"
                    className="w-full bg-indigo-900/40 border border-indigo-700 rounded-xl px-4 py-2 text-sm text-indigo-200 focus:outline-none"
                  />

                  <button
                    onClick={handleMpesa}
                    disabled={isProcessing}
                    className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-all disabled:opacity-50"
                  >
                    {isProcessing ? 'Processing...' : 'Pay with M-PESA'}
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <Link href="/cart" className="text-indigo-300 underline hover:text-indigo-100">
              View Full Cart
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}