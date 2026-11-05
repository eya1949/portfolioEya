import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';

export const LANGUAGES = [
  { code: 'fr', flag: 'fr', label: 'Français' },
  { code: 'en', flag: 'gb', label: 'English' },
  { code: 'ar', flag: 'ma', label: 'العربية' },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en', 'ar'],
    load: 'languageOnly', // en-US -> en
    interpolation: { escapeValue: false }, // React échappe déjà
    detection: {
      order: ['localStorage', 'navigator'], // choix mémorisé, sinon langue du navigateur
      caches: ['localStorage'],
    },
  });

// Met à jour <html lang> et <html dir> (l'arabe s'écrit de droite à gauche)
function applyDirection(lng) {
  const code = (lng || 'fr').split('-')[0];
  document.documentElement.lang = code;
  document.documentElement.dir = i18n.dir(code);
}
i18n.on('languageChanged', applyDirection);
applyDirection(i18n.resolvedLanguage || i18n.language);

export default i18n;