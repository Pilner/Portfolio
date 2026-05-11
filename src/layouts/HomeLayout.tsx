import HomeNavbar from '@src/components/layouts/HomeNavbar';
import { Outlet } from 'react-router';

export default function HomeLayout() {
  return (
    <div className='h-dvh'>
      <HomeNavbar />
      <Outlet />
    </div>
  );
}
