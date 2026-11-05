import React from 'react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';
import Tag from '../Components/Tag';

const projects = [
  {
    company: 'Mibtech (Akdital Holding)',
    title: "Système d'Information Hospitalier (HIS)",
    description:
      "Développement et maintenance d'un HIS destiné à plusieurs établissements de santé, pour gérer les processus médicaux, administratifs et hospitaliers.",
    points: [
      'Nouvelles fonctionnalités avec PHP, Symfony et Mediboard',
      "Développement et maintenance d'API REST",
      'Interfaces utilisateur avec Smarty et Bootstrap',
      'Modules métiers développés avec les équipes fonctionnelles',
      'Optimisation des requêtes SQL et des performances PostgreSQL',
      'Maintenance corrective et évolutive, revues de code, Scrum',
    ],
    tech: ['PHP', 'Symfony', 'Mediboard', 'Smarty', 'Bootstrap', 'PostgreSQL', 'REST API'],
  },
  {
    company: 'Mibtech (Akdital Holding)',
    title: 'Plateforme de consolidation des données hospitalières',
    description:
      "Plateforme qui centralise les données de plusieurs établissements de santé dans une base unique, pour garantir leur cohérence, leur disponibilité et leur fiabilité.",
    points: [
      "Services d'extraction, d'intégration et de synchronisation des données issues de plusieurs HIS",
      'Fonctionnalités développées avec Symfony, Doctrine ORM et React.js',
      'Réplication PostgreSQL pour la haute disponibilité',
      "Traitements asynchrones (Queuing) et répartition de l'extraction sur des Read Replicas",
      'Déploiement et maintenance sous Docker et Ubuntu',
    ],
    tech: ['Symfony', 'Doctrine ORM', 'React.js', 'PostgreSQL', 'Docker', 'Ubuntu'],
  },
  {
    company: 'Mibtech (Akdital Holding)',
    title: 'NabadyPro Card',
    description: 'Application web de gestion de cartes, développée en full stack avec la stack MERN.',
    points: [
      'Application développée avec React.js et Tailwind CSS',
      'API REST avec Node.js et Express.js',
      'Conception de la base MongoDB et fonctionnalités CRUD',
      "Participation à l'intégration Front-End / Back-End",
    ],
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    company: 'Mibtech (Akdital Holding)',
    title: 'NabadyBot',
    description: 'Chatbot multilingue (Darija, Français et autres langues).',
    points: [
      "Développement de l'interface avec React.js",
      'Intégration de Bootstrap',
      "Optimisation de l'expérience utilisateur",
    ],
    tech: ['React.js', 'Bootstrap'],
  },
];

export default function Realisation() {
  return (
    <PageLayout>
      <Reveal><SectionTitle strong="Mes">réalisations</SectionTitle></Reveal>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <Reveal key={p.title} index={i} className="bg-white/50 rounded-xl p-5 flex flex-col gap-3">
            <div>
              <p className="text-sm text-hawkes-blue-700 font-medium">{p.company}</p>
              <h2 className="text-xl font-bold text-victoria-900">{p.title}</h2>
            </div>
            <p className="text-victoria-800 leading-7">{p.description}</p>
            <ul className="list-disc pl-5 space-y-1 text-victoria-800">
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </PageLayout>
  );
}