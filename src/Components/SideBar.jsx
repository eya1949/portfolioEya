import React, { createContext, useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronLeft, Menu as MenuIcon, Moon, Sun, X } from 'lucide-react';
import { motion } from 'framer-motion';
import me from '../assets/aya.jpg'; 
import { LANGUAGES } from '../i18n';
import useTheme from '../hooks/useTheme';
import useIsMobile from '../hooks/Useismobile';

const SidebarContext = createContext({ open: true, closeMobile: () => {} });

export default function Menu({ children }) {
  const { t, i18n } = useTranslation();
  const rtl = i18n.dir() === 'rtl';
  const current = LANGUAGES.find((l) => l.code === i18n.resolvedLanguage) || LANGUAGES[0];

  const isMobile = useIsMobile();
  const [open, setOpen] = useState(() => window.innerWidth >= 1024); // replié / déplié (ordinateur)
  const [mobileOpen, setMobileOpen] = useState(false); // tiroir (mobile)
  const [dark, toggleTheme] = useTheme();
  const [langOpen, setLangOpen] = useState(false);

  // Sur mobile le tiroir affiche toujours le menu complet
  const expanded = isMobile || open;
  const closeMobile = () => setMobileOpen(false);

  // Ferme le tiroir avec Échap, ou si l'écran devient large
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMobileOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  const footerBtn =
    'p-2 rounded-lg text-victoria-700 hover:text-hawkes-blue-700 hover:bg-white/60 dark:text-victoria-200 dark:hover:text-hawkes-blue-300 dark:hover:bg-white/10 transition-colors';

  return (
    <SidebarContext.Provider value={{ open: expanded, closeMobile }}>
      {/* Barre du haut (mobile uniquement) */}
      <header className="md:hidden shrink-0 z-30 flex items-center justify-between gap-3 px-3 py-2 bg-gradient-to-r from-white to-illusion-200 dark:from-victoria-900 dark:to-victoria-950 shadow-md">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label={t('sidebar.openMenu')}
          aria-expanded={mobileOpen}
          className={footerBtn}
        >
          <MenuIcon size={26} />
        </button>
        <span dir="ltr" className="text-lg font-bold tracking-wide">
          <span className="text-victoria-950 dark:text-white">Aya </span>
          <span className="text-hawkes-blue-600 dark:text-hawkes-blue-400">Bacharou</span>
        </span>
        <button onClick={toggleTheme} aria-pressed={dark} aria-label={t('sidebar.theme')} className={footerBtn}>
          {dark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </header>

      {/* Fond assombri derrière le tiroir (mobile) */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeMobile}
          aria-hidden="true"
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed md:relative inset-y-0 start-0 z-50 md:z-auto h-[100dvh] shrink-0 w-72 ${
          open ? 'md:w-72' : 'md:w-20'
        } bg-gradient-to-b from-white to-illusion-200 text-victoria-950 dark:from-victoria-900 dark:to-victoria-950 dark:text-victoria-50 flex flex-col rounded-e-2xl md:shadow-xl transition-[transform,width,visibility] duration-300 ${
          mobileOpen
            ? 'translate-x-0 shadow-2xl'
            : '-translate-x-full rtl:translate-x-full invisible md:visible'
        } md:translate-x-0 md:rtl:translate-x-0`}
      >
        {/* Fermer (mobile) */}
        <button
          onClick={closeMobile}
          aria-label={t('sidebar.closeMenu')}
          className={`${footerBtn} md:hidden absolute top-3 end-3`}
        >
          <X size={22} />
        </button>

        {/* Bouton replier / déplier (ordinateur) */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? t('sidebar.collapse') : t('sidebar.expand')}
          className="absolute -end-3 top-16 z-20 w-7 h-7 rounded-full bg-white border border-victoria-700/20 shadow hidden md:flex items-center justify-center text-victoria-700 hover:text-hawkes-blue-700 dark:bg-victoria-800 dark:border-white/15 dark:text-victoria-200 dark:hover:text-hawkes-blue-300"
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
        <div className="flex flex-col items-center px-4 pt-6 pb-4 md:pb-5">
          <div className="relative">
            <div
              className={`bg-white dark:bg-victoria-800 rounded-3xl shadow-md transition-all duration-300 ${
                expanded ? 'w-28 h-28 md:w-40 md:h-40 p-2' : 'w-14 h-14 p-1'
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

          {expanded && (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                dir="ltr"
                className="mt-4 md:mt-5 text-xl md:text-2xl font-bold tracking-wide"
              >
                <span className="text-victoria-950 dark:text-white">Aya </span>
                <span className="text-hawkes-blue-600 dark:text-hawkes-blue-400">Bacharou</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="mt-1 md:mt-2 text-center text-victoria-700 dark:text-victoria-300 font-semibold"
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
            expanded ? 'justify-around' : 'flex-col gap-2'
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
              {expanded && <ChevronDown size={16} />}
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
  const { open, closeMobile } = useContext(SidebarContext);
  const { i18n } = useTranslation();
  const slide = i18n.dir() === 'rtl' ? 8 : -8;

  return (
    <NavLink
      to={to}
      end={to === '/'}
      onClick={closeMobile}
      title={open ? undefined : text}
      className={({ isActive }) =>
        `relative flex items-center gap-4 py-3 md:py-4 border-b border-victoria-700/15 dark:border-white/10 font-semibold text-lg transition-colors ${
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