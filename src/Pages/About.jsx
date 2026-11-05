import React from 'react';
import { Github, Mail, MapPin } from 'lucide-react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';
import Card from '../Components/Card';

export default function About() {
  return (
    <PageLayout>
      <Reveal>
        <p className="text-xl text-hawkes-blue-600 font-semibold mb-2 text-center">Salut 👋</p>
        <h1 className="text-3xl font-bold text-victoria-900 text-center mb-4">Je suis Aya Bacharou</h1>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-hawkes-blue-600" />
            <span>Maroc</span>
          </div>
          <a href="mailto:ayabcr.dev@gmail.com" className="flex items-center gap-2 hover:underline">
            <Mail size={20} className="text-hawkes-blue-600" />
            <span>ayabcr.dev@gmail.com</span>
          </a>
          <a
            href="https://github.com/eya1949"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Github size={20} className="text-hawkes-blue-600" />
            <span>@eya1949</span>
          </a>
        </div>
      </Reveal>

      <Reveal index={1} className="space-y-4">
        <SectionTitle strong="Un peu">à propos de moi...</SectionTitle>
        <p className="text-base leading-7 text-victoria-800">
          Développeuse Full Stack avec plus de 2 ans d’expérience, spécialisée en <strong className="text-hawkes-blue-700">Symfony</strong>,{' '}
          <strong className="text-hawkes-blue-700">React</strong> et <strong className="text-hawkes-blue-700">Node.js</strong>. J’ai
          développé des applications web et des systèmes d’information hospitaliers (HIS), avec des API REST, PostgreSQL et MongoDB,
          dans le but de concevoir des solutions performantes et évolutives.
          <br /><br />
          Curieuse, rigoureuse et toujours prête à apprendre, je m’adapte rapidement aux nouvelles technologies et m’investis pleinement dans les projets
          ambitieux au sein d’équipes dynamiques.
        </p>
      </Reveal>

      <Reveal index={2} className="space-y-4">
        <SectionTitle strong="Intérêts">personnels</SectionTitle>
        <Card />
      </Reveal>
    </PageLayout>
  );
}