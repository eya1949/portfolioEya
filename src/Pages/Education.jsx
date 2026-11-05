import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';

const items = [
  { id: 'mern', year: '2024', school: 'JobInTech' },
  { id: 'school1337', year: '2023', school: '1337' },
  { id: 'ista', year: '2020 – 2022', school: 'ISTA Hay Riad' },
  { id: 'bac', year: '2020', school: 'Lycée Imame El Ghazali' },
];

export default function Education() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Reveal>
        <SectionTitle strong={t('education.titleStrong')}>{t('education.titleRest')}</SectionTitle>
      </Reveal>

      <ol className="relative border-s-2 border-victoria-700/30 ms-3 space-y-8">
        {items.map(({ id, year, school }, i) => {
          const description = t(`education.items.${id}.description`, { defaultValue: '' });
          return (
            <li key={id} className="ms-6">
              <span className="absolute -start-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-hawkes-blue-600 text-white">
                <GraduationCap size={16} />
              </span>
              <Reveal index={i} className="bg-white/50 rounded-xl p-5">
                <p className="text-sm text-victoria-700">
                  <bdi>{year}</bdi>
                </p>
                <h2 className="text-xl font-bold text-victoria-900">{t(`education.items.${id}.title`)}</h2>
                <p className="text-hawkes-blue-700 font-medium">{school}</p>
                {description && <p className="text-victoria-800 mt-2">{description}</p>}
              </Reveal>
            </li>
          );
        })}
      </ol>
    </PageLayout>
  );
}