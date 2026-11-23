import React from 'react';

/**
 * Titre de section. Rend un <h1> par défaut (chaque page en a un seul) ;
 * passer `as="h2"` quand la page possède déjà son propre <h1>.
 */
export default function SectionTitle({ strong, children, as: Tag = 'h1' }) {
  return (
    <Tag className="flex items-center gap-4">
      <span aria-hidden="true" className="h-6 w-px bg-victoria-700 dark:bg-victoria-300" />
      <span className="font-medium text-victoria-700 dark:text-victoria-300">
        <strong className="font-display text-2xl text-hawkes-blue-700 dark:text-hawkes-blue-300">
          {strong}
        </strong>{' '}
        {children}
      </span>
    </Tag>
  );
}
