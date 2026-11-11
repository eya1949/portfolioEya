import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Download, Github, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';
import Card from '../Components/Card';
import cvFile from '../assets/Bacharou_Aya.pdf'; // CV dans src/assets/

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
        <p className="text-2xl sm:text-3xl font-extrabold leading-snug text-hawkes-blue-700 dark:text-hawkes-blue-300">
          {t('about.tagline')}
        </p>
        <p className="text-base leading-7 text-victoria-800 dark:text-victoria-200">{t('about.bio1')}</p>
        <p className="text-base leading-7 text-victoria-800 dark:text-victoria-200">
          <Trans i18nKey="about.bio2" components={{ hl: <strong className="text-hawkes-blue-700 dark:text-hawkes-blue-300" /> }} />
        </p>
        <p className="text-base leading-7 text-victoria-800 dark:text-victoria-200">{t('about.bio3')}</p>
        <p className="text-base leading-7 text-victoria-800 dark:text-victoria-200">{t('about.bio4')}</p>

        <div className="pt-2">
          <motion.a
            href={cvFile}
            download="CV-Aya-Bacharou.pdf"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 rounded-full border border-hawkes-blue-600/30 bg-white/60 py-2 ps-2 pe-5 font-semibold text-hawkes-blue-700 shadow-sm transition-colors hover:border-hawkes-blue-600/60 hover:bg-white/90 dark:border-hawkes-blue-400/40 dark:bg-victoria-800/60 dark:text-hawkes-blue-300 dark:hover:bg-victoria-800"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-hawkes-blue-600/10 text-hawkes-blue-600 transition-colors group-hover:bg-hawkes-blue-600 group-hover:text-white dark:bg-hawkes-blue-400/15 dark:text-hawkes-blue-300">
              <Download size={18} aria-hidden="true" className="transition-transform group-hover:translate-y-0.5" />
            </span>
            <span>{t('about.downloadCv')}</span>
            <span className="rounded-md bg-hawkes-blue-600/10 px-1.5 py-0.5 text-[10px] font-bold tracking-wider dark:bg-hawkes-blue-400/15">
              PDF
            </span>
          </motion.a>
        </div>
      </Reveal>

      <Reveal index={2} className="space-y-4">
        <SectionTitle strong={t('about.interestsStrong')}>{t('about.interestsRest')}</SectionTitle>
        <Card />
      </Reveal>
    </PageLayout>
  );
}