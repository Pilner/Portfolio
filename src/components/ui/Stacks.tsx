import type { TStacks } from '@src/types/TStacks';
import { AllStacks, FrameworksData, LanguagesData, OSData, ToolsData } from '@src/utils/constants/StacksData';
import { Fragment, useState } from 'react';
import { Link } from 'react-router';

export default function Stacks() {
  const [active, setActive] = useState<TStacks[] | null>(null);

  return (
    <div className='flex h-full w-full flex-col items-center gap-4'>
      <div className='flex flex-col overflow-hidden rounded-lg border border-black/50'>
        <div className='flex w-full items-center border-b border-black/50'>
          <TabSelector active={active} setActive={setActive} />
        </div>
        <div className={`flex w-full flex-wrap justify-center gap-1 px-4 py-8 sm:gap-2 md:gap-3 xl:gap-4`}>
          {AllStacks.map((stack, index) => (
            <Link to={stack.url} className='contents' target='_blank' rel='noreferrer' key={index}>
              <div
                className={`group relative aspect-square h-16 w-auto rounded-lg border-black/25 p-2 transition duration-500 sm:h-20 md:h-24 lg:h-28 xl:h-30 2xl:h-32 ${active && !active.includes(stack) ? 'opacity-50 blur-sm grayscale' : ''}`}
              >
                <div className='transition-[opacity, color] relative h-full w-full duration-250 group-hover:opacity-25 group-hover:blur-sm'>
                  <img src={stack.imageSrc} alt={stack.alt} className='aspect-square h-full object-contain' />
                </div>
                <div className='absolute top-0 left-0 hidden h-full w-full opacity-0 transition-all duration-250 group-hover:flex group-hover:items-center group-hover:justify-center group-hover:opacity-100'>
                  <p className='text-xs font-semibold text-black lg:text-sm'>{stack.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function TabSelector({
  active,
  setActive,
}: {
  active: TStacks[] | null;
  setActive: React.Dispatch<React.SetStateAction<TStacks[] | null>>;
}) {
  const list: { name: string; data: TStacks[] }[] = [
    {
      name: 'Languages',
      data: LanguagesData,
    },
    { name: 'Frameworks', data: FrameworksData },
    { name: 'Tools', data: ToolsData },
    { name: 'OS', data: OSData },
  ];

  return (
    <Fragment>
      {list.map((item) => (
        <div
          className={`flex-1 cursor-pointer p-2 transition duration-500 hover:bg-black/25 ${active === item.data ? 'bg-black/25' : ''}`}
          key={`TabSelector-${item.name}`}
        >
          <p
            className={`transition-[tracking, decoration] text-center text-sm tracking-normal underline duration-250 md:text-lg lg:text-xl ${active === item.data ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
            onClick={() => {
              if (active === item.data) {
                setActive(null);
              } else {
                setActive(item.data);
              }
            }}
          >
            {item.name}
          </p>
        </div>
      ))}
    </Fragment>
  );
}
