'use client';

import { useEffect, useState, useCallback } from 'react';
import productsDefault, { Product } from '../../data/product';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';

async function payWithStripe(items: Product[]) {
  if (!items.length) throw new Error('Cart is empty');

  const res = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text);
  }

  const data = await res.json();

  if (data?.url) {
    window.location.assign(data.url);
  } else {
    throw new Error('Stripe session URL missing');
  }
}

async function payWithPayHero(phone: string, amount: number, reference: string) {
  const res = await fetch('/api/payhero', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, amount, reference }),
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error || 'M-Pesa request failed');
  }

  return data;
}

export default function StoreClient() {

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<Product[]>([]);
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', icon: 'ri-grid-line' },
    { id: 'tshirts', name: 'T-Shirts', icon: 'ri-shirt-line' },
    { id: 'hoodies', name: 'Hoodies', icon: 'ri-shirt-line' },
    { id: 'bags', name: 'Tote Bags', icon: 'ri-handbag-line' },
    { id: 'journals', name: 'Journals', icon: 'ri-book-line' },
    { id: 'mugs', name: 'Mugs', icon: 'ri-cup-line' },
  ];

  /* LOAD CART */

  useEffect(() => {
    const stored = localStorage.getItem('faithfulCart');

    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  /* SAVE CART */

  useEffect(() => {
    localStorage.setItem('faithfulCart', JSON.stringify(cart));
  }, [cart]);

  /* FILTER PRODUCTS */

  const filteredProducts =
    selectedCategory === 'all'
      ? productsDefault
      : productsDefault.filter(p => p.category === selectedCategory);

  /* CART ACTIONS */

  const addToCart = (item: Product) => {
    setCart(prev => [...prev, item]);
    toast.success(`${item.name} added to cart`);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  /* TOTAL */

  const totalNumber = cart.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  const total = totalNumber.toFixed(2);

  /* STRIPE */

  const handleStripe = useCallback(async () => {

    if (!cart.length) {
      toast.error('Cart is empty');
      return;
    }

    setIsProcessing(true);

    try {
      await payWithStripe(cart);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Stripe failed');
    }

    setIsProcessing(false);

  }, [cart]);

  /* MPESA */

  const handleMpesa = useCallback(async () => {

    if (!cart.length) {
      toast.error('Cart is empty');
      return;
    }

    const normalized = phone.replace(/\D/g, '');

    if (!normalized) {
      toast.error('Enter phone number');
      return;
    }

    setIsProcessing(true);

    try {

      const amount = Math.round(totalNumber * 130);

      await payWithPayHero(
        normalized,
        amount,
        'FM-' + Date.now()
      );

      toast.success('M-Pesa prompt sent');

    } catch (err) {

      toast.error(err instanceof Error ? err.message : 'Payment failed');

    }

    setIsProcessing(false);

  }, [phone, totalNumber, cart]);

  return (
    <>

      {/* CATEGORY FILTER */}

      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`p-4 rounded-xl ${
              selectedCategory === cat.id
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-900 text-indigo-300'
            }`}
          >
            <i className={`${cat.icon} text-xl`} />
            <p className="text-sm">{cat.name}</p>
          </button>
        ))}
      </div>

      {/* PRODUCTS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProducts.map(prod => (

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

              <span className="text-sm text-indigo-300 block mb-2">
                {prod.verse}
              </span>

              <h3 className="text-xl font-bold mb-2">
                {prod.name}
              </h3>

              <p className="text-indigo-200 text-sm mb-4">
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

      {cart.length > 0 && (

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
        <Link href="/cart" className="text-indigo-300 underline">
          View Full Cart
        </Link>
      </div>

    </>
  );
}