import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home, SearchX } from 'lucide-react';
import PageLayout from '../Components/PageLayout';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col items-center justify-center text-center gap-4 py-10">
        <SearchX size={56} aria-hidden="true" className="text-hawkes-blue-600 dark:text-hawkes-blue-400" />
        <p className="font-loubag text-5xl font-bold text-hawkes-blue-700 dark:text-hawkes-blue-300">
          <bdi>404</bdi>
        </p>
        <h1 className="text-2xl font-bold text-victoria-900 dark:text-victoria-50">{t('notFound.title')}</h1>
        <p className="max-w-md leading-7 text-victoria-800 dark:text-victoria-200">{t('notFound.message')}</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-hawkes-blue-600 px-5 py-2.5 font-semibold text-white shadow-sm transition-colors hover:bg-hawkes-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hawkes-blue-600"
        >
          <Home size={18} aria-hidden="true" />
          {t('notFound.backHome')}
        </Link>
      </div>
    </PageLayout>
  );
}
