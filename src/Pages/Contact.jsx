import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';

const contacts = [
  { id: 'email', icon: Mail, labelKey: 'contact.email', value: 'ayabcr.dev@gmail.com', href: 'mailto:ayabcr.dev@gmail.com' },
  { id: 'phone', icon: Phone, labelKey: 'contact.phone', value: '+212 680 084 122', href: 'tel:+212680084122' },
  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', value: 'Aya Bacharou', href: 'https://www.linkedin.com/in/aya-bacharou/', external: true },
  { id: 'github', icon: Github, label: 'GitHub', value: '@eya1949', href: 'https://github.com/eya1949', external: true },
  { id: 'location', icon: MapPin, labelKey: 'contact.location', valueKey: 'contact.locationValue' },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Reveal>
        <SectionTitle strong={t('contact.titleStrong')}>{t('contact.titleRest')}</SectionTitle>
      </Reveal>
      <Reveal>
        <p className="text-victoria-800 dark:text-victoria-200 leading-7">{t('contact.intro')}</p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map(({ id, icon: Icon, label, labelKey, value, valueKey, href, external }, i) => {
          const content = (
            <>
              <Icon size={24} className="text-hawkes-blue-600 dark:text-hawkes-blue-400 shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-victoria-700 dark:text-victoria-300">{labelKey ? t(labelKey) : label}</p>
                <p className="font-semibold text-victoria-900 dark:text-victoria-50 break-words">
                  <bdi>{valueKey ? t(valueKey) : value}</bdi>
                </p>
              </div>
            </>
          );
          const base = 'bg-white/50 dark:bg-victoria-800/60 rounded-xl p-4 flex items-center gap-4';
          const card = href ? (
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`${base} hover:bg-white/80 dark:hover:bg-victoria-800 transition-colors`}
            >
              {content}
            </a>
          ) : (
            <div className={base}>{content}</div>
          );
          return (
            <Reveal key={id} index={i}>
              {card}
            </Reveal>
          );
        })}
      </div>
    </PageLayout>
  );
}