import React from 'react';
import { GraduationCap } from 'lucide-react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';

const education = [
  {
    year: '2024',
    title: 'MERN Full Stack',
    school: 'JobInTech',
    description: 'Formation certifiée.',
  },
  {
    year: '2023',
    title: "Formation courte à l'école 1337",
    school: '1337',
    description: "Initiation intensive au développement informatique et à la méthodologie 42.",
  },
  {
    year: '2020 – 2022',
    title: 'Technicien Spécialisé en développement informatique',
    school: 'ISTA Hay Riad',
    description: 'Diplôme de Technicien Spécialisé.',
  },
  {
    year: '2020',
    title: 'Baccalauréat, Physique et Chimie',
    school: 'Lycée Imame El Ghazali',
    description: '',
  },
];

export default function Education() {
  return (
    <PageLayout>
      <Reveal><SectionTitle strong="Parcours">académique</SectionTitle></Reveal>

      <ol className="relative border-l-2 border-victoria-700/30 ml-3 space-y-8">
        {education.map((e, i) => (
          <li key={e.title} className="ml-6">
            <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-hawkes-blue-600 text-white">
              <GraduationCap size={16} />
            </span>
            <Reveal index={i} className="bg-white/50 rounded-xl p-5">
              <p className="text-sm text-victoria-700">{e.year}</p>
              <h2 className="text-xl font-bold text-victoria-900">{e.title}</h2>
              <p className="text-hawkes-blue-700 font-medium">{e.school}</p>
              {e.description && <p className="text-victoria-800 mt-2">{e.description}</p>}
            </Reveal>
          </li>
        ))}
      </ol>
    </PageLayout>
  );
}