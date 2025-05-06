import { BookOpenText, Braces, Bug, CalendarDays } from 'lucide-react';
import React from 'react';

export default function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="bg-illusion-50 rounded-2xl shadow-md p-4">
        <div className="flex items-center mb-2 text-victoria-900">
          <Bug className="mr-2" />
          <span className="text-lg font-semibold">Hackathons & défis</span>
        </div>
        <span className="block text-sm text-victoria-700">
          Participer à des compétitions de code et résoudre des challenges techniques.
        </span>
      </div>

      <div className="bg-illusion-50 rounded-2xl shadow-md p-4">
        <div className="flex items-center mb-2 text-victoria-900">
          <Braces className="mr-2" />
          <span className="text-lg font-semibold">Open source</span>
        </div>
        <span className="block text-sm text-victoria-700">
          Contribuer à des projets open source pour partager et enrichir mes compétences.
        </span>
      </div>

      <div className="bg-illusion-50 rounded-2xl shadow-md p-4">
        <div className="flex items-center mb-2 text-victoria-900">
          <BookOpenText className="mr-2" />
          <span className="text-lg font-semibold">Lecture & apprentissage</span>
        </div>
        <span className="block text-sm text-victoria-700">
          Explorer des livres sur la tech, le développement personnel et la fiction.
        </span>
      </div>

      <div className="bg-illusion-50 rounded-2xl shadow-md p-4">
        <div className="flex items-center mb-2 text-victoria-900">
          <CalendarDays className="mr-2" />
          <span className="text-lg font-semibold">Événements & meetups</span>
        </div>
        <span className="block text-sm text-victoria-700">
          Assister à des conférences, des meetups et rester connecté à la communauté tech.
        </span>
      </div>
    </div>
  );
}
