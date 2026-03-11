'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState, useCallback } from 'react';
import productsDefault, { Product } from '../../data/product';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import Image from 'next/image';

/* -------------------------------------------------
   PAYMENT FUNCTIONS (CLIENT SIDE)
--------------------------------------------------*/

async function payWithStripe(items: Product[]) {
  if (!items || items.length === 0) throw new Error('Cart is empty');

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
}

async function payWithPayHero(phone: string, amount: number, orderRef: string) {
  const cleanPhone = phone.replace(/\D/g, '');

  if (!cleanPhone || cleanPhone.length < 9) {
    throw new Error('Please enter a valid M-Pesa phone number');
  }

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
    throw new Error(
      errorData.error || `Request failed with status ${res.status}`
    );
  }

  const json = await res.json();

  if (json.success) return json;

  throw new Error(json.error || 'Failed to initiate STK push');
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

  /* -------------------------------------------------
     LOAD CART FROM LOCAL STORAGE
  --------------------------------------------------*/

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem('faithfulCart');

      if (stored) {
        const parsed: Product[] = JSON.parse(stored);
        setCart(parsed);
      }
    } catch (error) {
      console.error('Failed to load cart', error);
    }
  }, []);

  /* -------------------------------------------------
     SAVE CART TO LOCAL STORAGE
  --------------------------------------------------*/

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('faithfulCart', JSON.stringify(cart));
    }
  }, [cart, mounted]);

  /* -------------------------------------------------
     FILTER PRODUCTS
  --------------------------------------------------*/

  const filteredProducts =
    selectedCategory === 'all'
      ? productsDefault
      : productsDefault.filter((p) => p.category === selectedCategory);

  /* -------------------------------------------------
     CART FUNCTIONS
  --------------------------------------------------*/

  const addToCart = (item: Product) => {
    setCart((prev) => [...prev, item]);
    toast.success(`${item.name} added to cart`);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  /* -------------------------------------------------
     TOTAL CALCULATION
  --------------------------------------------------*/

  const totalNumber = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  const total = mounted ? totalNumber.toFixed(2) : '0.00';

  /* -------------------------------------------------
     STRIPE PAYMENT
  --------------------------------------------------*/

  const handleStripe = useCallback(async () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    setIsProcessing(true);

    try {
      await payWithStripe(cart);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('Stripe checkout failed');
      }
    } finally {
      setIsProcessing(false);
    }
  }, [cart]);

  /* -------------------------------------------------
     M-PESA PAYMENT
  --------------------------------------------------*/

  const handleMpesa = useCallback(async () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const normalized = phone.replace(/\D/g, '');

    if (!/^\d{9,15}$/.test(normalized)) {
      toast.error('Enter a valid phone number (07... or 254...)');
      return;
    }

    setIsProcessing(true);

    try {
      const amountInKes = Math.round(totalNumber * 130);

      await payWithPayHero(
        normalized,
        amountInKes,
        'FM-ORDER-' + Date.now()
      );

      toast.success('M-PESA prompt sent! Enter your PIN.');
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('M-PESA payment failed');
      }
    } finally {
      setIsProcessing(false);
    }
  }, [phone, cart, totalNumber]);

  /* -------------------------------------------------
     PAGE
  --------------------------------------------------*/

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-gray-100">
      <Header />
      <Toaster position="top-right" />

      <main className="pt-24 pb-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-300 mb-4">
              Faith Store
            </h1>

            <p className="text-lg text-indigo-200">
              Wear your faith with inspirational Christian merchandise
            </p>
          </div>

          {/* CATEGORY FILTER */}

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-900 text-indigo-300'
                }`}
              >
                <i className={`${category.icon} text-xl`} />
                <p className="text-sm">{category.name}</p>
              </button>
            ))}
          </div>

          {/* PRODUCTS */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-indigo-950/30 rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">

                  <span className="text-sm text-indigo-300 mb-2 block">
                    {prod.verse}
                  </span>

                  <h3 className="text-xl font-bold mb-2">
                    {prod.name}
                  </h3>

                  <p className="text-sm text-indigo-200 mb-4">
                    {prod.description}
                  </p>

                  <div className="flex justify-between items-center">

                    <span className="text-xl font-bold text-indigo-300">
                      ${Number(prod.price).toFixed(2)}
                    </span>

                    <button
                      onClick={() => addToCart(prod)}
                      className="bg-indigo-600 px-4 py-2 rounded-lg"
                    >
                      Add to Cart
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CART */}

          {mounted && cart.length > 0 && (
            <div className="fixed bottom-8 right-8 bg-indigo-950 p-6 rounded-xl shadow-xl w-80">

              <h4 className="font-bold mb-4">
                Cart ({cart.length})
              </h4>

              <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">

                    <span>{item.name}</span>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-400"
                    >
                      ×
                    </button>

                  </div>
                ))}
              </div>

              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <button
                onClick={handleStripe}
                disabled={isProcessing}
                className="w-full bg-indigo-600 py-2 rounded-lg mb-2"
              >
                Pay with Card
              </button>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="2547..."
                className="w-full p-2 rounded bg-indigo-900 mb-2"
              />

              <button
                onClick={handleMpesa}
                disabled={isProcessing}
                className="w-full bg-green-600 py-2 rounded-lg"
              >
                Pay with M-Pesa
              </button>

            </div>
          )}

          <div className="text-center mt-12">
            <Link
              href="/cart"
              className="text-indigo-300 underline"
            >
              View Full Cart
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}