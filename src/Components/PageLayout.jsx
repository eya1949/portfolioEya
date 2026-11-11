import React from 'react';

// Conteneur commun à toutes les pages : remplit le parent, défile en interne, sans scrollbar visible
export default function PageLayout({ children }) {
  return (
    <div className="h-full w-full overflow-y-auto no-scrollbar p-4 sm:p-8 bg-illusion-100 dark:bg-victoria-900 transition-colors duration-300 rounded-2xl shadow-xl flex flex-col gap-6 text-victoria-950 dark:text-victoria-50">
      {children}
    </div>
  );
}