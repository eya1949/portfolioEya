import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Clé de traduction associée à chaque route.
const PAGE_KEYS = {
  '/': 'about',
  '/education': 'education',
  '/capacites': 'skills',
  '/experience': 'experience',
  '/realisation': 'projects',
  '/contact': 'contact',
};

const OG_LOCALES = { fr: 'fr_FR', en: 'en_US', ar: 'ar_MA' };

function upsertMeta(attr, key, content) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

/**
 * Garde le <head> synchronisé avec la page courante et la langue active :
 * titre, description, Open Graph / Twitter et URL canonique.
 */
export default function useDocumentMeta(pathname) {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0];

  useEffect(() => {
    const key = PAGE_KEYS[pathname];
    const page = key || 'notFound';

    const title = t(`meta.${page}.title`);
    const description = t(`meta.${page}.description`);
    // L'URL canonique est toujours celle de la page réellement servie.
    const url = `${window.location.origin}${pathname}`;
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');

    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', `${siteUrl}/og-image.jpg`);
    upsertMeta('property', 'og:locale', OG_LOCALES[lang] || 'fr_FR');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', `${siteUrl}/og-image.jpg`);
    upsertLink('canonical', url);
  }, [pathname, lang, t]);
}
