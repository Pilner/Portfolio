import { Route, Routes } from 'react-router';
import { PersonalizationProvider } from './contexts/Personalization';
import HomeLayout from './layouts/HomeLayout';
import AboutPage from './pages/About';
import ExperiencePage from './pages/Experience';
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';

export default function App() {
  return (
    <PersonalizationProvider>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path='/' index element={<HomePage />} />
          <Route path='/about' index element={<AboutPage />} />
          <Route path='/experience' index element={<ExperiencePage />} />
          <Route path='/projects' index element={<ProjectsPage />} />
        </Route>
      </Routes>
    </PersonalizationProvider>
  );
}
