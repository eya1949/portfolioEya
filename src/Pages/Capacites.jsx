import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Code2, Layers, Database, Server, Wrench, Workflow,
  FileCode2, Webhook, ListChecks, LayoutDashboard, KanbanSquare, RefreshCw,
} from 'lucide-react';
import {
  SiJavascript, SiTypescript, SiPhp, SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiSymfony, SiTailwindcss, SiBootstrap, SiPostgresql, SiMongodb, SiDoctrine,
  SiJsonwebtokens, SiDocker, SiUbuntu, SiGit, SiGithub, SiGitlab, SiComposer,
  SiNpm, SiVite, SiFigma,
} from 'react-icons/si';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';
import Tag from '../Components/Tag';

// Les noms de technologies ne se traduisent pas ; seuls les titres passent par i18n.
// level = niveau de maîtrise en % (valeurs à ajuster selon ton ressenti).
const skills = [
  {
    id: 'languages',
    icon: Code2,
    items: [
      { name: 'JavaScript', icon: SiJavascript, level: 90 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'PHP', icon: SiPhp, level: 88 },
    ],
  },
  {
    id: 'frameworks',
    icon: Layers,
    items: [
      { name: 'React.js', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 70 },
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'Express.js', icon: SiExpress, level: 85 },
      { name: 'Symfony', icon: SiSymfony, level: 88 },
      { name: 'Smarty', icon: FileCode2, level: 75 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 85 },
    ],
  },
  {
    id: 'databases',
    icon: Database,
    items: [
      { name: 'SQL', icon: Database, level: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85 },
      { name: 'MongoDB', icon: SiMongodb, level: 80 },
    ],
  },
  {
    id: 'api',
    icon: Server,
    items: [
      { name: 'REST API', icon: Webhook, level: 90 },
      { name: 'Doctrine ORM', icon: SiDoctrine, level: 85 },
      { name: 'JWT Authentication', icon: SiJsonwebtokens, level: 80 },
      { name: 'CRUD', icon: ListChecks, level: 95 },
      { name: 'Architecture MVC', icon: LayoutDashboard, level: 85 },
    ],
  },
  {
    id: 'devops',
    icon: Wrench,
    items: [
      { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'Ubuntu Linux', icon: SiUbuntu, level: 75 },
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'GitHub', icon: SiGithub, level: 85 },
      { name: 'GitLab', icon: SiGitlab, level: 80 },
      { name: 'Composer', icon: SiComposer, level: 80 },
      { name: 'NPM', icon: SiNpm, level: 85 },
      { name: 'Vite', icon: SiVite, level: 80 },
      { name: 'Figma', icon: SiFigma, level: 65 },
    ],
  },
  {
    id: 'methods',
    icon: Workflow,
    items: [
      { name: 'Agile (Scrum)', icon: RefreshCw, level: 80 },
      { name: 'Kanban', icon: KanbanSquare, level: 75 },
    ],
  },
];

const languages = [
  { id: 'arabic', level: 'native' },
  { id: 'french', level: 'intermediate' },
  { id: 'english', level: 'fluent' },
];

const qualities = ['communication', 'problemSolving', 'adaptability', 'autonomy', 'fastLearner'];

// Une ligne : icône + nom + pourcentage, et une barre qui se remplit à l'apparition
function SkillRow({ name, icon: Icon, level, index }) {
  return (
    <li>
      <div className="flex items-center gap-2 mb-1">
        <Icon size={18} className="text-hawkes-blue-600 dark:text-hawkes-blue-400 shrink-0" aria-hidden="true" />
        <span className="flex-1 text-sm font-medium text-victoria-900 dark:text-victoria-50">
          <bdi>{name}</bdi>
        </span>
        <span className="text-xs font-semibold text-hawkes-blue-700 dark:text-hawkes-blue-300">
          <bdi>{level}%</bdi>
        </span>
      </div>
      <div
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1.5 rounded-full bg-victoria-700/10 dark:bg-white/10 overflow-hidden"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 + index * 0.05, ease: 'easeOut' }}
          className="h-full rounded-full bg-hawkes-blue-600"
        />
      </div>
    </li>
  );
}

export default function Capacites() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Reveal>
        <SectionTitle strong={t('skills.titleStrong')}>{t('skills.titleRest')}</SectionTitle>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {skills.map(({ id, icon: Icon, items }, i) => (
          <Reveal key={id} index={i} className="bg-white/50 dark:bg-victoria-800/60 rounded-xl p-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icon size={22} className="text-hawkes-blue-600 dark:text-hawkes-blue-400" />
              <h2 className="font-semibold text-victoria-900 dark:text-victoria-50">{t(`skills.categories.${id}`)}</h2>
            </div>
            <ul className="space-y-3">
              {items.map((item, j) => (
                <SkillRow key={item.name} index={j} {...item} />
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <SectionTitle strong={t('skills.langsStrong')}>{t('skills.langsRest')}</SectionTitle>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {languages.map(({ id, level }, i) => (
          <Reveal key={id} index={i} className="bg-white/50 dark:bg-victoria-800/60 rounded-xl p-4 text-center">
            <p className="font-semibold text-victoria-900 dark:text-victoria-50">{t(`skills.langNames.${id}`)}</p>
            <p className="text-victoria-700 dark:text-victoria-300 text-sm">{t(`skills.levels.${level}`)}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <SectionTitle strong={t('skills.qualitiesStrong')}>{t('skills.qualitiesRest')}</SectionTitle>
      </Reveal>
      <Reveal className="flex flex-wrap gap-2">
        {qualities.map((q) => (
          <Tag key={q}>{t(`skills.qualities.${q}`)}</Tag>
        ))}
      </Reveal>
    </PageLayout>
  );
}