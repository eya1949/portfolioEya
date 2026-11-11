import React, { createContext, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronLeft, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import me from '../assets/me.jpg'; // photo dans src/assets/me.jpg
import { LANGUAGES } from '../i18n';
import useTheme from '../hooks/useTheme';

const SidebarContext = createContext({ open: true });

export default function Menu({ children }) {
  const { t, i18n } = useTranslation();
  const rtl = i18n.dir() === 'rtl';
  const current = LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) || LANGUAGES[0];

  const [open, setOpen] = useState(() => window.innerWidth >= 768);
  const [dark, toggleTheme] = useTheme();
  const [langOpen, setLangOpen] = useState(false);

  const footerBtn =
    'p-2 rounded-lg text-victoria-700 hover:text-hawkes-blue-700 hover:bg-white/60 dark:text-victoria-200 dark:hover:text-hawkes-blue-300 dark:hover:bg-white/10 transition-colors';

  return (
    <SidebarContext.Provider value={{ open }}>
      <aside
        className={`relative h-screen shrink-0 bg-gradient-to-b from-white to-illusion-200 text-victoria-950 dark:from-victoria-900 dark:to-victoria-950 dark:text-victoria-50 flex flex-col rounded-e-2xl shadow-xl transition-[width] duration-300 ${
          open ? 'w-72' : 'w-20'
        }`}
      >
        {/* Bouton replier / déplier */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t('sidebar.collapse') : t('sidebar.expand')}
          className="absolute -end-3 top-16 z-20 w-7 h-7 rounded-full bg-white border border-victoria-700/20 shadow flex items-center justify-center text-victoria-700 hover:text-hawkes-blue-700 dark:bg-victoria-800 dark:border-white/15 dark:text-victoria-200 dark:hover:text-hawkes-blue-300"
        >
          <motion.span
            animate={{ rotate: (open ? 0 : 180) + (rtl ? 180 : 0) }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <ChevronLeft size={16} />
          </motion.span>
        </motion.button>

        {/* Profil */}
        <div className="flex flex-col items-center px-4 pt-6 pb-5">
          <div className="relative">
            <div
              className={`bg-white dark:bg-victoria-800 rounded-3xl shadow-md transition-all duration-300 ${
                open ? 'w-40 h-40 p-2' : 'w-14 h-14 p-1'
              }`}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-hawkes-blue-600 flex items-center justify-center text-white font-bold text-2xl">
                AB
                <img
                  src={me}
                  alt="Aya Bacharou"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <span className="absolute -bottom-1 -end-1 w-5 h-5 rounded-full bg-hawkes-blue-600 border-4 border-white dark:border-victoria-900" />
          </div>

          {open && (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                dir="ltr"
                className="mt-5 text-2xl font-bold tracking-wide"
              >
                <span className="text-victoria-950 dark:text-white">Aya </span>
                <span className="text-hawkes-blue-600 dark:text-hawkes-blue-400">Bacharou</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="mt-2 text-center text-victoria-700 dark:text-victoria-300 font-semibold"
              >
                {t('sidebar.role')}
              </motion.p>
            </>
          )}
        </div>

        {/* Liens */}
        <nav className="flex-1 overflow-y-auto no-scrollbar border-t border-victoria-700/15 dark:border-white/10">{children}</nav>

        {/* Pied : langue et mode sombre */}
        <div
          className={`border-t border-victoria-700/15 dark:border-white/10 p-3 flex items-center ${
            open ? 'justify-around' : 'flex-col gap-2'
          }`}
        >
          <div className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              aria-label={t('sidebar.language')}
              aria-expanded={langOpen}
              className={`${footerBtn} flex items-center gap-1`}
            >
              <img
                src={`https://flagcdn.com/w40/${current.flag}.png`}
                alt={current.label}
                className="w-6 h-6 rounded-full object-cover"
              />
              {open && <ChevronDown size={16} />}
            </button>
            {langOpen && (
              <ul className="absolute bottom-full start-0 mb-2 w-36 rounded-xl bg-white dark:bg-victoria-800 border border-victoria-700/15 dark:border-white/10 shadow-lg overflow-hidden z-30 text-victoria-900 dark:text-victoria-50">
                {LANGUAGES.map((l) => (
                  <li key={l.code}>
                    <button
                      onClick={() => {
                        i18n.changeLanguage(l.code);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-illusion-100 dark:hover:bg-white/10 ${
                        l.code === current.code ? 'font-bold text-hawkes-blue-700 dark:text-hawkes-blue-300' : ''
                      }`}
                    >
                      <img src={`https://flagcdn.com/w40/${l.flag}.png`} alt="" className="w-5 h-5 rounded-full object-cover" />
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button onClick={toggleTheme} aria-pressed={dark} aria-label={t('sidebar.theme')} className={footerBtn}>
            {dark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
      </aside>
    </SidebarContext.Provider>
  );
}

export function SidebarItem({ icon, text, to }) {
  const { open } = useContext(SidebarContext);
  const { i18n } = useTranslation();
  const slide = i18n.dir() === 'rtl' ? 8 : -8;

  return (
    <NavLink
      to={to}
      end={to === '/'}
      title={open ? undefined : text}
      className={({ isActive }) =>
        `relative flex items-center gap-4 py-4 border-b border-victoria-700/15 dark:border-white/10 font-semibold text-lg transition-colors ${
          open ? 'px-6' : 'justify-center'
        } ${
          isActive
            ? 'bg-white/70 text-hawkes-blue-700 dark:bg-white/10 dark:text-hawkes-blue-300'
            : 'text-victoria-800 hover:bg-white/50 hover:text-hawkes-blue-700 dark:text-victoria-200 dark:hover:bg-white/5 dark:hover:text-hawkes-blue-300'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <motion.span className="shrink-0" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            {icon}
          </motion.span>
          {open && (
            <motion.span
              initial={{ opacity: 0, x: slide }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="truncate"
            >
              {text}
            </motion.span>
          )}
          {isActive && (
            <motion.span
              layoutId="active-bar"
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
              className="absolute end-0 top-0 h-full w-1 bg-hawkes-blue-600"
            />
          )}
        </>
      )}
    </NavLink>
  );
}