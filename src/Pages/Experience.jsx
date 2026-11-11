import React from 'react';
import { useTranslation } from 'react-i18next';
import { BriefcaseBusiness } from 'lucide-react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';
import Tag from '../Components/Tag';

const jobs = [
  { id: 'cdi', company: 'Mibtech (Akdital Holding)', tech: ['PHP', 'Symfony', 'React.js', 'PostgreSQL', 'Docker'] },
  {
    id: 'internship',
    company: 'Mibtech (Akdital Holding)',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  { id: 'mern', company: 'ARK-X Talent Factory', tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'] },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Reveal>
        <SectionTitle strong={t('experience.titleStrong')}>{t('experience.titleRest')}</SectionTitle>
      </Reveal>

      <ol className="relative border-s-2 border-victoria-700/30 dark:border-white/20 ms-3 space-y-8">
        {jobs.map(({ id, company, tech }, i) => {
          const points = t(`experience.jobs.${id}.points`, { returnObjects: true });
          return (
            <li key={id} className="ms-6">
              <span className="absolute -start-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-hawkes-blue-600 text-white">
                <BriefcaseBusiness size={16} />
              </span>
              <Reveal index={i} className="bg-white/50 dark:bg-victoria-800/60 rounded-xl p-5 flex flex-col gap-3">
                <div>
                  <h2 className="text-xl font-bold text-victoria-900 dark:text-victoria-50">{t(`experience.jobs.${id}.role`)}</h2>
                  <p className="text-hawkes-blue-700 dark:text-hawkes-blue-300 font-medium">{company}</p>
                  <p className="text-sm text-victoria-700 dark:text-victoria-300">{t(`experience.jobs.${id}.period`)}</p>
                </div>
                <ul className="list-disc ps-5 space-y-1 text-victoria-800 dark:text-victoria-200">
                  {points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {tech.map((name) => (
                    <Tag key={name}>{name}</Tag>
                  ))}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </PageLayout>
  );
}