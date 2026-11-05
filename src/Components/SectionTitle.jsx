import React from 'react';

export default function SectionTitle({ strong, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-px h-6 bg-victoria-700"></div>
      <span className="text-victoria-700 font-medium">
        <strong className="text-hawkes-blue-700 text-2xl">{strong}</strong> {children}
      </span>
    </div>
  );
}