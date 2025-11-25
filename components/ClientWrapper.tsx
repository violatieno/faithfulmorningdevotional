'use client';

import { useEffect, useState } from 'react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Optional: restore dark mode from localStorage or system
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') setIsDark(true);
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      {children}
    </div>
  );
}
