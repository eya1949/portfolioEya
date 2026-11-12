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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
      {ITEMS.map(({ key, Icon }) => (
        <div key={key} className="bg-illusion-50 rounded-2xl shadow-md p-4">
          <div className="flex items-center mb-2 text-victoria-900">
            <Icon className="me-2" />
            <span className="text-lg font-semibold">
              {t(`interests.${key}.title`)}
            </span>
          </div>
          <span className="block text-sm text-victoria-700">
            {t(`interests.${key}.description`)}
          </span>
        </div>
      ))}
    </div>
  );
}