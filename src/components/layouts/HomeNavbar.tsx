import { faAnglesLeft, faBriefcase, faDiagramProject, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  return (
    <div className='group fixed right-0 flex h-full items-center justify-center'>
      <div className='visible absolute duration-250 ease-in-out group-hover:invisible group-hover:opacity-0'>
        <FontAwesomeIcon icon={faAnglesLeft} size='lg' />
      </div>

      <nav className='invisible translate-x-4 p-4 opacity-0 transition-all duration-250 ease-in-out group-hover:visible group-hover:translate-x-0 group-hover:opacity-100'>
        <ul className='relative flex flex-col justify-between gap-10'>
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={
                'group/item border-primary-black/50 hover:bg-primary-black bg-primary-white hover:text-primary-white relative aspect-square h-12 cursor-pointer rounded-full border transition-[color,margin] duration-250'
              }
            >
              <a href={tab.url} className='flex h-full w-full items-center justify-center'>
                <FontAwesomeIcon icon={tab.icon} />
                <div className='text-primary-black absolute top-1/2 right-0 z-199 flex translate-x-0 -translate-y-1/2 items-center justify-center rounded-lg px-1 opacity-0 transition-all duration-500 group-hover/item:top-1/2 group-hover/item:right-[125%] group-hover/item:opacity-100'>
                  <p className='text-primary-black small font-bold'>{tab.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
