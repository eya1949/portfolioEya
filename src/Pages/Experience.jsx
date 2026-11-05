import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';
import Tag from '../Components/Tag';

const experiences = [
  {
    role: 'Développeuse Full Stack (CDI)',
    company: 'Mibtech (Akdital Holding)',
    period: "Septembre 2024 – Aujourd'hui",
    points: [
      "Développement et maintenance d'un Système d'Information Hospitalier (HIS) avec PHP, Symfony et Mediboard",
      'Participation à une plateforme de consolidation des données hospitalières (Symfony, Doctrine ORM, React.js)',
      'Optimisation PostgreSQL, réplication et traitements asynchrones',
      'Déploiement et maintenance sous Docker et Ubuntu, méthodologie Agile (Scrum)',
    ],
    tech: ['PHP', 'Symfony', 'React.js', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Stage pré-embauche Full Stack',
    company: 'Mibtech (Akdital Holding)',
    period: 'Mai 2024 – Août 2024',
    points: [
      'NabadyPro Card : React.js, Tailwind CSS, API REST Node.js / Express.js, MongoDB, CRUD',
      'NabadyBot : chatbot multilingue (Darija, Français et autres), interface React.js et Bootstrap',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    role: 'Stage Développeuse MERN',
    company: 'ARK-X Talent Factory',
    period: 'Février 2024 – Juin 2024',
    points: [
      "Développement d'applications MERN : Front-End React.js, Back-End Node.js et Express.js",
      "Création d'API REST et gestion des bases de données MongoDB",
      'Optimisation des performances, maintenance et correction de bugs',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
];

export default function Experience() {
  return (
    <PageLayout>
      <Reveal><SectionTitle strong="Expériences">professionnelles</SectionTitle></Reveal>

      <ol className="relative border-l-2 border-victoria-700/30 ml-3 space-y-8">
        {experiences.map((e, i) => (
          <li key={e.role + e.period} className="ml-6">
            <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-hawkes-blue-600 text-white">
              <BriefcaseBusiness size={16} />
            </span>
            <Reveal index={i} className="bg-white/50 rounded-xl p-5 flex flex-col gap-3">
              <div>
                <h2 className="text-xl font-bold text-victoria-900">{e.role}</h2>
                <p className="text-hawkes-blue-700 font-medium">{e.company}</p>
                <p className="text-sm text-victoria-700">{e.period}</p>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-victoria-800">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </PageLayout>
  );
}