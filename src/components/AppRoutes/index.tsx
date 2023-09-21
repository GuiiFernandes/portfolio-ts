import { Route, Routes } from 'react-router-dom';

import About from '../../pages/About';
import AllProjects from '../../pages/AllProjects';
import MainProjects from '../../pages/MainProjects';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Admin from '../../pages/Admin';
import ClientLayout from '../ClientLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={ <ClientLayout /> }>
        <Route path="/about" element={ <About /> } />
        <Route path="/projects/all" element={ <AllProjects /> } />
        <Route path="/projects" element={ <MainProjects /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/" element={ <Home /> } />
      </Route>
      <Route path="/admin" element={ <Admin /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}
