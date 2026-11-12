import React from 'react';
import { useTranslation } from 'react-i18next';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';
import Tag from '../Components/Tag';

const projects = [
  {
    id: 'his',
    company: 'Mibtech (Akdital Holding)',
    tech: ['PHP', 'Symfony', 'Mediboard', 'Smarty', 'Bootstrap', 'PostgreSQL', 'REST API'],
  },
  {
    id: 'consolidation',
    company: 'Mibtech (Akdital Holding)',
    tech: ['Symfony', 'Doctrine ORM', 'React.js', 'PostgreSQL', 'Docker', 'Ubuntu'],
  },
  {
    id: 'nabadypro',
    company: 'Nabady',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 'nabadybot',
    company: 'Nabady',
    tech: ['React.js', 'Bootstrap'],
  },
];

export default function Realisation() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Reveal>
        <SectionTitle strong={t('projects.titleStrong')}>{t('projects.titleRest')}</SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {projects.map(({ id, company, tech }, i) => {
          const points = t(`projects.items.${id}.points`, { returnObjects: true });
          return (
            <Reveal key={id} index={i} className="bg-white/50 dark:bg-victoria-800/60 rounded-xl p-4 sm:p-5 flex flex-col gap-3">
              <div>
                <p className="text-sm text-hawkes-blue-700 dark:text-hawkes-blue-300 font-medium">{company}</p>
                <h2 className="text-xl font-bold text-victoria-900 dark:text-victoria-50">{t(`projects.items.${id}.title`)}</h2>
              </div>
              <p className="text-victoria-800 dark:text-victoria-200 leading-7">{t(`projects.items.${id}.description`)}</p>
              <ul className="list-disc ps-5 space-y-1 text-victoria-800 dark:text-victoria-200">
                {points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {tech.map((name) => (
                  <Tag key={name}>{name}</Tag>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </PageLayout>
  );
}