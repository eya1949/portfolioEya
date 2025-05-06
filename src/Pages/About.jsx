import React from 'react';
import { Github, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';

export default function About() {
  return (
    <div className="h-full p-8 bg-illusion-100 rounded-2xl shadow-xl flex flex-col gap-6 text-victoria-950 max-h-[600px] overflow-y-scroll">

      <div>
        <h3 className="text-xl text-hawkes-blue-600 font-semibold mb-2 text-center">Salut 👋</h3>
        <h1 className="text-3xl font-bold text-victoria-900 text-center mb-4">Je suis Aya Bacharou</h1>

        <div className="flex justify-center items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin size={20} className="text-hawkes-blue-600" />
            <span>Morocco</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={20} className="text-hawkes-blue-600" />
            <span>ayabcr.dev@gmail.com</span>
          </div>
          <Link to="https://github.com/eya1949" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <Github size={20} className="text-hawkes-blue-600" />
            <span>@eya1949</span>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-px h-6 bg-victoria-700"></div>
          <span className="text-victoria-700 font-medium">
            <strong className="text-hawkes-blue-700 text-2xl">Un peu</strong> à propos de moi...
          </span>
        </div>
        <p className="text-base leading-7 text-victoria-800">
          Développeuse Full Stack passionnée, je maîtrise le stack <strong className="text-hawkes-blue-700">MERN</strong> et possède une solide expérience dans le développement d’applications web modernes,
          notamment dans le secteur de la santé. Grâce à mes expériences professionnelles et mes stages, j’ai acquis une expertise en création
          d’interfaces intuitives, développement d’API sécurisées et gestion de bases de données <strong className="text-hawkes-blue-700">NoSQL</strong>.
          <br /><br />
          Curieuse, rigoureuse et toujours prête à apprendre, je m’adapte rapidement aux nouvelles technologies et m’investis pleinement dans les projets
          ambitieux au sein d’équipes dynamiques.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-px h-6 bg-victoria-700"></div>
          <span className="text-victoria-700 font-medium">
            <strong className="text-hawkes-blue-700 text-2xl">Intérêts</strong> personnels
          </span>
        </div>

        <Card />
      </div>

    </div>
  );
}
