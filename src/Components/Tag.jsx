import React from 'react';

export default function Tag({ children }) {
  return (
    <span
      dir="ltr"
      className="px-3 py-1 rounded-full bg-white/60 dark:bg-victoria-900/60 text-hawkes-blue-700 dark:text-hawkes-blue-300 text-sm font-medium border border-hawkes-blue-600/30 dark:border-hawkes-blue-400/40"
    >
      {children}
    </span>
  );
}