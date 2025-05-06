import React from 'react';
import {
  GraduationCap,
  UserCircle,
  BriefcaseBusiness,
  PhoneCall,
  SunMoon,
  Medal,
  Shapes
} from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import Menu from './SideBar';
import { SidebarItem } from './SideBar';

import Contact from '../Pages/Contact';
import Realisation from '../Pages/Realisation';
import Capacites from '../Pages/Capacites';
import About from '../Pages/About';
import Education from '../Pages/Education';
import Experince from '../Pages/Experince';

export default function Nav() {

  return (
    <Router>
      <div className="flex h-screen">
        <Menu>
          <NavLink to="/">
            <SidebarItem icon={<UserCircle size={28} />} text="About" />
          </NavLink>
          <NavLink to="/capacites">
            <SidebarItem icon={<Shapes size={28} />} text="Capacites" />
          </NavLink>
          <NavLink to="/realisation">
            <SidebarItem icon={<Medal size={28} />} text="Realisation" />
          </NavLink>
          <NavLink to="/experince">
            <SidebarItem icon={<BriefcaseBusiness size={28} />} text="Experince" />
          </NavLink>
          <NavLink to="/education">
            <SidebarItem icon={<GraduationCap  size={28} />} text="Education" />
          </NavLink>
          <NavLink to="/contact">
            <SidebarItem icon={<PhoneCall size={28} />} text="Contact" />
          </NavLink>
          <hr className="my-3" />
          <SidebarItem icon={<SunMoon size={28} />} text="Mode" />
        </Menu>

        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/capacites" element={<Capacites />} />
            <Route path="/realisation" element={<Realisation />} />
            <Route path="/experince" element={<Experince />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
