import React, { Suspense, lazy, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, UserCircle, BriefcaseBusiness, PenSquare, Wrench, Medal } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

import Menu, { SidebarItem } from './SideBar';
import useDocumentMeta from '../hooks/useDocumentMeta';

// Une page = un morceau de JS chargé à la demande : le bundle d'entrée reste léger.
const About = lazy(() => import('../Pages/About'));
const Education = lazy(() => import('../Pages/Education'));
const Capacites = lazy(() => import('../Pages/Capacites'));
const Experience = lazy(() => import('../Pages/Experience'));
const Realisation = lazy(() => import('../Pages/Realisation'));
const Contact = lazy(() => import('../Pages/Contact'));
const NotFound = lazy(() => import('../Pages/NotFound'));

const ROUTES = [
  { path: '/', element: <About />, key: 'about' },
  { path: '/education', element: <Education />, key: 'education' },
  { path: '/capacites', element: <Capacites />, key: 'skills' },
  { path: '/experience', element: <Experience />, key: 'experience' },
  { path: '/realisation', element: <Realisation />, key: 'projects' },
  { path: '/contact', element: <Contact />, key: 'contact' },
];

function PageFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-hawkes-blue-600/25 border-t-hawkes-blue-600 motion-reduce:animate-none" />
      <span className="sr-only">Chargement…</span>
    </div>
  );
}

// useLocation doit être appelé à l'intérieur du Router, d'où ce composant séparé
function AnimatedRoutes() {
  const location = useLocation();
  const mainRef = useRef(null);

  // Titre, description et URL canonique suivent la page et la langue.
  useDocumentMeta(location.pathname);

  // Après une navigation, on déplace le focus sur le contenu (lecteurs d'écran).
  useEffect(() => {
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <main
      id="main"
      ref={mainRef}
      tabIndex={-1}
      className="flex-1 min-w-0 min-h-0 p-2 sm:p-4 overflow-hidden outline-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="h-full w-full"
        >
          <Suspense fallback={<PageFallback />}>
            <Routes location={location}>
              {ROUTES.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default function Nav() {
  const { t } = useTranslation();

  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <div className="flex flex-col md:flex-row h-[100dvh] overflow-hidden">
          <Menu>
            <SidebarItem to="/" icon={<UserCircle size={26} />} text={t('nav.about')} />
            <SidebarItem to="/education" icon={<GraduationCap size={26} />} text={t('nav.education')} />
            <SidebarItem to="/capacites" icon={<Wrench size={26} />} text={t('nav.skills')} />
            <SidebarItem to="/experience" icon={<BriefcaseBusiness size={26} />} text={t('nav.experience')} />
            <SidebarItem to="/realisation" icon={<Medal size={26} />} text={t('nav.projects')} />
            <SidebarItem to="/contact" icon={<PenSquare size={26} />} text={t('nav.contact')} />
          </Menu>

          <AnimatedRoutes />
        </div>
      </MotionConfig>
    </Router>
  );
}
