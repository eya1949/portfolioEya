import { useEffect, useState } from 'react';

const KEY = 'theme';

// Choix mémorisé, sinon réglage du système (clair / sombre)
function getInitialDark() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'dark' || saved === 'light') return saved === 'dark';
  } catch {
    /* localStorage indisponible */
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

export default function useTheme() {
  const [dark, setDark] = useState(getInitialDark);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    root.style.colorScheme = dark ? 'dark' : 'light'; // scrollbars et champs natifs
    try {
      localStorage.setItem(KEY, dark ? 'dark' : 'light');
    } catch {
      /* ignoré */
    }
  }, [dark]);

  return [dark, () => setDark((d) => !d)];
}