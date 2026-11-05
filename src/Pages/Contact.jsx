import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import PageLayout from '../Components/PageLayout';
import SectionTitle from '../Components/SectionTitle';
import Reveal from '../Components/Reveal';

const contacts = [
  { icon: Mail, label: 'Email', value: 'ayabcr.dev@gmail.com', href: 'mailto:ayabcr.dev@gmail.com' },
  { icon: Phone, label: 'Téléphone', value: '+212 680 084 122', href: 'tel:+212680084122' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Aya Bacharou', href: 'https://www.linkedin.com/in/aya-bacharou/', external: true },
  { icon: Github, label: 'GitHub', value: '@eya1949', href: 'https://github.com/eya1949', external: true },
  { icon: MapPin, label: 'Localisation', value: 'Oulfa, Casablanca, Maroc' },
];

export default function Contact() {
  return (
    <PageLayout>
      <Reveal><SectionTitle strong="Me">contacter</SectionTitle></Reveal>
      <Reveal><p className="text-victoria-800 leading-7">
        Un projet, une opportunité ou une simple question ? Écrivez-moi, je réponds avec plaisir.
      </p></Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map(({ icon: Icon, label, value, href, external }, i) => {
          const content = (
            <>
              <Icon size={24} className="text-hawkes-blue-600 shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-victoria-700">{label}</p>
                <p className="font-semibold text-victoria-900 break-words">{value}</p>
              </div>
            </>
          );
          const base = 'bg-white/50 rounded-xl p-4 flex items-center gap-4';
          const card = href ? (
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`${base} hover:bg-white/80 transition-colors`}
            >
              {content}
            </a>
          ) : (
            <div className={base}>
              {content}
            </div>
          );
          return (
            <Reveal key={label} index={i}>
              {card}
            </Reveal>
          );
        })}
      </div>
    </PageLayout>
  );
}