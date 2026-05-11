import { Route, Routes } from 'react-router';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path='/' index element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}
