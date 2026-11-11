import React from 'react';

export default function SectionTitle({ strong, children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-px h-6 bg-victoria-700 dark:bg-victoria-300"></div>
      <span className="text-victoria-700 dark:text-victoria-300 font-medium">
        <strong className="text-hawkes-blue-700 dark:text-hawkes-blue-300 text-2xl">{strong}</strong> {children}
      </span>
    </div>
  );
}