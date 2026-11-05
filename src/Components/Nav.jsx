import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, UserCircle, BriefcaseBusiness, PenSquare, Wrench, Medal } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';

import Menu, { SidebarItem } from './SideBar';

import Contact from '../Pages/Contact';
import Realisation from '../Pages/Realisation';
import Capacites from '../Pages/Capacites';
import About from '../Pages/About';
import Education from '../Pages/Education';
import Experience from '../Pages/Experience';

// useLocation doit être appelé à l'intérieur du Router, d'où ce composant séparé
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="h-full w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/capacites" element={<Capacites />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/realisation" element={<Realisation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Nav() {
  const { t } = useTranslation();

  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <div className="flex h-screen overflow-hidden">
          <Menu>
            <SidebarItem to="/" icon={<UserCircle size={26} />} text={t('nav.about')} />
            <SidebarItem to="/education" icon={<GraduationCap size={26} />} text={t('nav.education')} />
            <SidebarItem to="/capacites" icon={<Wrench size={26} />} text={t('nav.skills')} />
            <SidebarItem to="/experience" icon={<BriefcaseBusiness size={26} />} text={t('nav.experience')} />
            <SidebarItem to="/realisation" icon={<Medal size={26} />} text={t('nav.projects')} />
            <SidebarItem to="/contact" icon={<PenSquare size={26} />} text={t('nav.contact')} />
          </Menu>

          <main className="flex-1 min-w-0 h-screen p-4 overflow-hidden">
            <AnimatedRoutes />
          </main>
        </div>
      </MotionConfig>
    </Router>
  );
}