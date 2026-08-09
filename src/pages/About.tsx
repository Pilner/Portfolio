import Portrait from '@src/assets/pictures/portrait.jpg';
import JsonBlock from '@src/components/ui/JsonBlock';
import ScrollHint from '@src/components/ui/ScrollHint';
import { AboutInfoJson } from '@src/utils/constants/AboutInfoJson';

export default function AboutPage() {
  return (
    <main>
      <section className='relative flex h-screen items-center justify-center'>
        <h1 className='font-title text-center text-[40px] leading-15 font-bold sm:text-[48px] lg:text-[60px]'>
          This is me
        </h1>
        <ScrollHint />
      </section>
      <section className='min-h-screen py-32 xl:pb-0'>
        <div className='container flex flex-col-reverse gap-8 xl:h-screen xl:flex-row xl:gap-8'>
          <div className='flex h-full w-full items-center'>
            <JsonBlock data={AboutInfoJson} />
          </div>
          <div className='relative flex h-1/2 w-full items-center justify-center xl:h-full'>
            <img
              src={Portrait}
              alt="Railey's Picture"
              className='xs:w-3/5 z-10 aspect-square w-4/5 rounded-xl shadow-2xl md:w-2/3 lg:w-1/2 xl:h-1/2 xl:w-auto'
            />
            <img
              src={Portrait}
              alt=''
              aria-hidden='true'
              className='xs:w-3/5 absolute aspect-square w-4/5 translate-5 rounded-xl shadow-2xl blur-md grayscale md:w-2/3 lg:w-1/2 xl:h-1/2 xl:w-auto'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
