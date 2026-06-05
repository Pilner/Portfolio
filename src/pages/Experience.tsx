import type { TStacks } from '@src/types/TStacks';
import { AllStacks, FrameworksData, LanguagesData, OSData, ToolsData } from '@src/utils/constants/StacksData';
import { WorkData } from '@src/utils/constants/WorkData';
import { Fragment, useState } from 'react';
import { Link } from 'react-router';

export default function ExperiencePage() {
  const [active, setActive] = useState<TStacks[] | null>(null);

  return (
    <main>
      <section className='flex h-screen items-center justify-center'>
        <h1 className='font-title'>I make things work</h1>
      </section>
      <section className='min-h-screen'>
        <div className='container'>
          <div className='flex h-full w-full flex-col items-center gap-4'>
            <div className='flex flex-col overflow-hidden rounded-lg border border-black/50'>
              <div className='flex w-full items-center border-b border-black/50'>
                <div
                  className={`flex-1 cursor-pointer p-2 transition duration-500 hover:bg-black/25 ${active === LanguagesData ? 'bg-black/25' : ''}`}
                >
                  <p
                    className={`transition-[tracking, decoration] text-small lg:text-large text-center tracking-normal underline duration-250 ${active === LanguagesData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
                    onClick={() => {
                      if (active === LanguagesData) {
                        setActive(null);
                      } else {
                        setActive(LanguagesData);
                      }
                    }}
                  >
                    Languages
                  </p>
                </div>
                <div
                  className={`flex-1 cursor-pointer p-2 transition duration-500 hover:bg-black/25 ${active === FrameworksData ? 'bg-black/25' : ''}`}
                >
                  <p
                    className={`transition-[tracking, decoration] text-small lg:text-large text-center tracking-normal underline duration-250 ${active === FrameworksData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
                    onClick={() => {
                      if (active === FrameworksData) {
                        setActive(null);
                      } else {
                        setActive(FrameworksData);
                      }
                    }}
                  >
                    Frameworks
                  </p>
                </div>
                <div
                  className={`flex-1 cursor-pointer p-2 transition duration-500 hover:bg-black/25 ${active === ToolsData ? 'bg-black/25' : ''}`}
                >
                  <p
                    className={`transition-[tracking, decoration] text-small lg:text-large text-center tracking-normal underline duration-250 ${active === ToolsData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
                    onClick={() => {
                      if (active === ToolsData) {
                        setActive(null);
                      } else {
                        setActive(ToolsData);
                      }
                    }}
                  >
                    Tools
                  </p>
                </div>
                <div
                  className={`flex-1 cursor-pointer p-2 transition duration-500 hover:bg-black/25 ${active === OSData ? 'bg-black/25' : ''}`}
                >
                  <p
                    className={`transition-[tracking, decoration] text-small lg:text-large text-center tracking-normal underline duration-250 ${active === OSData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
                    onClick={() => {
                      if (active === OSData) {
                        setActive(null);
                      } else {
                        setActive(OSData);
                      }
                    }}
                  >
                    OS
                  </p>
                </div>
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
                        <p className='text-small font-semibold text-black'>{stack.text}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className='flex min-h-full flex-col gap-8 rounded-xl px-4 py-32'>
            {WorkData.map((work, index) => (
              <Fragment key={`work-${index}`}>
                <div className='flex flex-col-reverse gap-8 lg:flex-row lg:justify-between lg:gap-16'>
                  <div className='h-full w-full'>
                    <div className='mb-4 flex flex-col'>
                      <div className='flex flex-col lg:flex-row lg:items-center lg:gap-4'>
                        <Link to={work.link} target='_blank' rel='noreferrer'>
                          <h2 className='transition-[tracking, decoration] lg:text-h6 text-large text-center font-bold tracking-normal underline decoration-transparent duration-250 hover:tracking-widest hover:decoration-black lg:text-left'>
                            {work.companyName}
                          </h2>
                        </Link>
                        <p className='lg:text-caption text-center text-base font-semibold lg:text-left'>
                          ({formatDate(work.startDate)} - {formatDate(work.endDate)})
                        </p>
                      </div>
                      <p className='text-center text-base font-semibold lg:text-left'>{work.position}</p>
                    </div>
                    <p className='text-justify text-base lg:text-left'>{work.description}</p>
                  </div>
                  <div className='relative mx-auto aspect-square h-64 w-64 overflow-clip rounded-xl border border-black/50 bg-white'>
                    <img
                      src={work.imageSrc}
                      alt={`${work.companyName} Logo`}
                      className='aspect-square h-auto w-auto object-contain'
                    />
                  </div>
                </div>
                {index !== WorkData.length - 1 && <hr className='border-black/50' />}
              </Fragment>
            ))}
            <hr className='border-black/50' />
          </div>
        </div>
      </section>
      {/* <section className='py-16'>
      </section> */}
    </main>
  );
}

function formatDate(date: Date | false): string {
  if (date === false) {
    return 'Present';
  }
  return new Date(date).toLocaleString('en-PH', { month: 'short', year: 'numeric' });
}
