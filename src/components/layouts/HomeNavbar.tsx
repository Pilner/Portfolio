import { Link, useLocation } from 'react-router';

import { faSquare } from '@fortawesome/free-regular-svg-icons';
import {
  faAnglesLeft,
  faBriefcase,
  faCube,
  faDiagramProject,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePersonalizationContext } from '@src/hooks/UsePersonalizationContext';

const tabs = [
  {
    name: 'hero',
    icon: faHouse,
    text: 'Home',
    url: '/',
  },
  {
    name: 'about',
    icon: faUser,
    text: 'About',
    url: '/about',
  },
  {
    name: 'experience',
    icon: faBriefcase,
    text: 'Experience',
    url: '/experience',
  },
  {
    name: 'projects',
    icon: faDiagramProject,
    text: 'Projects',
    url: '/projects',
  },
];

export default function HomeNavbar() {
  const { pathname } = useLocation();

  const { logoView, setLogoView } = usePersonalizationContext();

  return (
    <div className='absolute z-999 flex w-full justify-center lg:fixed lg:right-0 lg:h-full lg:w-auto lg:items-center'>
      <div className='group flex items-center justify-center'>
        <div className='visible absolute hidden duration-250 ease-in-out group-hover:invisible group-hover:opacity-0 lg:block'>
          <FontAwesomeIcon icon={faAnglesLeft} size='lg' />
        </div>
        <nav className='p-4 transition-all duration-250 ease-in-out lg:invisible lg:translate-x-4 lg:opacity-0 lg:group-hover:visible lg:group-hover:translate-x-0 lg:group-hover:opacity-100'>
          <ul className='relative flex flex-row justify-between gap-10 lg:flex-col'>
            {tabs.map((tab, index) => (
              <li
                key={`home-navbar-tab-${tab.name}-${index}`}
                className={`group/item border-primary-black/50 relative aspect-square h-12 rounded-full border transition-[color,margin] duration-250 ${pathname === tab.url ? 'bg-primary-black text-primary-white' : 'hover:bg-primary-black hover:text-primary-white bg-primary-white'}`}
              >
                <Link
                  to={tab.url}
                  aria-disabled={pathname === tab.url ? 'true' : 'false'}
                  className={`flex h-full w-full items-center justify-center ${pathname === tab.url ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <FontAwesomeIcon icon={tab.icon} />
                  <div className='text-primary-black pointer-events-none absolute top-1/2 z-199 flex translate-x-0 -translate-y-1/2 items-center justify-center rounded-lg px-1 opacity-0 transition-all duration-500 group-hover/item:top-[150%] group-hover/item:opacity-100 lg:right-0 lg:group-hover/item:top-1/2 lg:group-hover/item:right-[125%]'>
                    <p className='text-primary-black text-sm font-bold whitespace-nowrap'>{tab.text}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`absolute bottom-0 mb-4 hidden w-full items-center justify-center ${pathname === tabs[0].url && 'lg:flex'}`}
      >
        <button
          className='group/item border-primary-black/50 hover:bg-primary-black hover:text-primary-white bg-primary-white relative aspect-square h-12 cursor-pointer rounded-full border transition-[color,margin] duration-250'
          onClick={() => setLogoView(logoView === '2d' ? '3d' : '2d')}
        >
          <FontAwesomeIcon icon={logoView === '3d' ? faCube : faSquare} />
          <div className='text-primary-black pointer-events-none absolute top-1/2 z-199 flex translate-x-0 -translate-y-1/2 items-center justify-center rounded-lg px-1 opacity-0 transition-all duration-500 group-hover/item:top-[150%] group-hover/item:opacity-100 lg:right-0 lg:group-hover/item:top-1/2 lg:group-hover/item:right-[125%]'>
            <p className='text-primary-black text-sm font-bold whitespace-nowrap'>
              {logoView === '3d' ? 'Switch to 2D' : 'Switch to 3D'}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
