import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectsData } from '@src/utils/constants/ProjectsData';
import { Fragment } from 'react';
import { Link } from 'react-router';

export default function Projects() {
  return (
    <section className='min-h-screen py-32'>
      <div className='container flex flex-col gap-32 px-4'>
        {ProjectsData.map((project, index) => (
          <Fragment>
            <div
              className={`flex flex-col-reverse gap-8 lg:justify-between lg:gap-16 ${index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              key={`project-${project.title}-${index}`}
            >
              <div className='flex basis-1/3 flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-md flex justify-center gap-2 font-bold lg:justify-start lg:text-xl'>
                    <Link
                      to={project.links.prod ? project.links.prod : project.links.github}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <span className='transition-[tracking, decoration] tracking-normal underline decoration-transparent duration-250 hover:tracking-widest hover:decoration-black'>
                        {project.title}
                      </span>
                    </Link>
                    <Link to={project.links.github} target='_blank' rel='noreferrer'>
                      <span>
                        <FontAwesomeIcon icon={faGithub} />
                      </span>
                    </Link>
                  </h2>
                  <div className='flex flex-wrap items-center justify-center gap-4 lg:justify-start'>
                    {project.stacks.map((stack) => (
                      <div
                        key={`stack-${project.title}-${stack.text}`}
                        className='h-10 rounded-xl border border-black/25 p-2 lg:h-12'
                        title={stack.text}
                      >
                        <img src={stack.imageSrc} className='aspect-square h-full' alt={stack.alt} />
                      </div>
                    ))}
                  </div>
                </div>
                <p className='text-md text-justify lg:text-left lg:text-lg'>{project.description}</p>
              </div>
              <div className='basis-2/3'>
                <div className='relative h-full w-full'>
                  <img
                    src={project.imageSrc}
                    alt={`${project.title} Photo`}
                    className='relative z-10 aspect-video w-full rounded-xl shadow-2xl'
                  />
                  <img
                    src={project.imageSrc}
                    alt=''
                    aria-hidden='true'
                    className='absolute top-0 z-0 aspect-video w-full translate-5 rounded-xl shadow-2xl blur-md grayscale'
                  />
                </div>
              </div>
            </div>
            {index !== ProjectsData.length - 1 && <hr className='border-black/50' />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
