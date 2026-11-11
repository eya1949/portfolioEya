import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Github, Mail, MapPin } from 'lucide-react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';
import Card from '../Components/Card';

export default function About() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Reveal>
        <p className="text-xl text-hawkes-blue-600 dark:text-hawkes-blue-400 font-semibold mb-2 text-center">{t('about.hello')}</p>
        <h1 className="text-3xl font-bold text-victoria-900 dark:text-victoria-50 text-center mb-4">
          {t('about.iam', { name: 'Aya Bacharou' })}
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-hawkes-blue-600 dark:text-hawkes-blue-400" />
            <span>{t('about.location')}</span>
          </div>
          <a href="mailto:ayabcr.dev@gmail.com" className="flex items-center gap-2 hover:underline">
            <Mail size={20} className="text-hawkes-blue-600 dark:text-hawkes-blue-400" />
            <bdi>ayabcr.dev@gmail.com</bdi>
          </a>
          <a
            href="https://github.com/eya1949"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Github size={20} className="text-hawkes-blue-600 dark:text-hawkes-blue-400" />
            <bdi>@eya1949</bdi>
          </a>
        </div>
      </Reveal>

      <Reveal index={1} className="space-y-4">
        <SectionTitle strong={t('about.aboutStrong')}>{t('about.aboutRest')}</SectionTitle>
        <p className="text-base leading-7 text-victoria-800 dark:text-victoria-200">
          <Trans i18nKey="about.bio1" components={{ hl: <strong className="text-hawkes-blue-700 dark:text-hawkes-blue-300" /> }} />
          <br />
          <br />
          {t('about.bio2')}
        </p>
      </Reveal>

      <Reveal index={2} className="space-y-4">
        <SectionTitle strong={t('about.interestsStrong')}>{t('about.interestsRest')}</SectionTitle>
        <Card />
      </Reveal>
    </PageLayout>
  );
}