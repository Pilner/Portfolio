import { Route, Routes } from 'react-router';
import HomeLayout from './layouts/HomeLayout';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/' index element={<HomePage />}></Route>
        <Route path='/about' index element={<AboutPage />}></Route>
      </Route>
    </Routes>
  );
}
