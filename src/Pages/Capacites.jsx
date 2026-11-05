import React from 'react';
import { Code2, Layers, Database, Server, Wrench, Workflow } from 'lucide-react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';
import Tag from '../Components/Tag';

const skills = [
  { icon: Code2, title: 'Langages', items: ['JavaScript', 'TypeScript', 'PHP'] },
  {
    icon: Layers,
    title: 'Frameworks & UI',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Symfony', 'Smarty', 'Tailwind CSS', 'Bootstrap'],
  },
  { icon: Database, title: 'Bases de données', items: ['SQL', 'PostgreSQL', 'MongoDB'] },
  {
    icon: Server,
    title: 'API & Back-End',
    items: ['REST API', 'Doctrine ORM', 'JWT Authentication', 'CRUD', 'Architecture MVC'],
  },
  {
    icon: Wrench,
    title: 'DevOps & Outils',
    items: ['Docker', 'Ubuntu Linux', 'Git', 'GitHub', 'GitLab', 'Composer', 'NPM', 'Vite', 'Figma'],
  },
  { icon: Workflow, title: 'Méthodes', items: ['Agile (Scrum)', 'Kanban'] },
];

const languages = [
  { name: 'Arabe', level: 'Langue maternelle' },
  { name: 'Français', level: 'Intermédiaire' },
  { name: 'Anglais', level: 'Courant' },
];

const qualities = [
  'Communication',
  'Résolution de problèmes',
  "Capacité d'adaptation",
  'Autonomie',
  'Apprentissage rapide',
];

export default function Capacites() {
  return (
    <PageLayout>
      <Reveal><SectionTitle strong="Compétences">techniques</SectionTitle></Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map(({ icon: Icon, title, items }, i) => (
          <Reveal key={title} index={i} className="bg-white/50 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Icon size={22} className="text-hawkes-blue-600" />
              <h2 className="font-semibold text-victoria-900">{title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal><SectionTitle strong="Langues">parlées</SectionTitle></Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {languages.map(({ name, level }, i) => (
          <Reveal key={name} index={i} className="bg-white/50 rounded-xl p-4 text-center">
            <p className="font-semibold text-victoria-900">{name}</p>
            <p className="text-victoria-700 text-sm">{level}</p>
          </Reveal>
        ))}
      </div>

      <Reveal><SectionTitle strong="Qualités">personnelles</SectionTitle></Reveal>
      <Reveal className="flex flex-wrap gap-2">
        {qualities.map((q) => (
          <Tag key={q}>{q}</Tag>
        ))}
      </Reveal>
    </PageLayout>
  );
}