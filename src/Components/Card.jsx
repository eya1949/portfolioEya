import { BookOpenText, Braces, Bug, CalendarDays } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ITEMS = [
  { key: 'hackathons', Icon: Bug },
  { key: 'openSource', Icon: Braces },
  { key: 'reading', Icon: BookOpenText },
  { key: 'events', Icon: CalendarDays },
];

export default function Card() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
      {ITEMS.map(({ key, Icon }) => (
        <div
          key={key}
          className="rounded-2xl bg-illusion-50 p-4 shadow-md transition-shadow hover:shadow-lg dark:bg-victoria-800/60 dark:shadow-none dark:ring-1 dark:ring-white/10"
        >
          <div className="mb-2 flex items-center text-victoria-900 dark:text-victoria-50">
            <Icon aria-hidden="true" className="me-2 shrink-0" />
            <span className="text-lg font-semibold">{t(`interests.${key}.title`)}</span>
          </div>
          <span className="block text-sm text-victoria-700 dark:text-victoria-300">
            {t(`interests.${key}.description`)}
          </span>
        </div>
      ))}
    </div>
  );
}
