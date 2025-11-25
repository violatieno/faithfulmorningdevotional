'use client';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Product } from '../../data/product';

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('faithfulCart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <main className="pt-24 pb-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">My Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, i) => (
              <div key={i} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-purple-600 font-bold">${item.price}</span>
                </div>
              </div>
            ))}
            <div className="flex justify-between text-xl font-bold border-t pt-4">
              <span>Total:</span>
              <span className="text-purple-600">${total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}