import React from 'react';

export default function Tag({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/60 text-hawkes-blue-700 text-sm font-medium border border-hawkes-blue-600/30">
      {children}
    </span>
  );
}