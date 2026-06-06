import { WorkData } from '@src/utils/constants/WorkData';
import { Link } from 'react-router';

import { Fragment } from 'react';

export default function Work() {
  return (
    <div className='flex min-h-full flex-col gap-8 rounded-xl px-4'>
      {WorkData.map((work, index) => (
        <Fragment key={`work-${index}`}>
          <div className='flex flex-col-reverse gap-8 lg:flex-row lg:justify-between lg:gap-16'>
            <div className='h-full w-full'>
              <div className='mb-4 flex flex-col'>
                <Link to={work.link} target='_blank' rel='noreferrer'>
                  <h2 className='transition-[tracking, decoration] text-md text-center font-bold tracking-normal underline decoration-transparent duration-250 hover:tracking-widest hover:decoration-black lg:text-left lg:text-xl'>
                    {work.companyName}
                  </h2>
                </Link>
                <p className='text-center text-sm font-semibold lg:text-left'>
                  {formatDate(work.startDate)} - {formatDate(work.endDate)}
                </p>
                <p className='text-center text-sm font-semibold lg:text-left'>{work.position}</p>
              </div>
              <p className='text-md text-justify lg:text-left lg:text-lg'>{work.description}</p>
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
    </div>
  );
}

function formatDate(date: Date | false): string {
  if (date === false) {
    return 'Present';
  }
  return new Date(date).toLocaleString('en-PH', { month: 'short', year: 'numeric' });
}
