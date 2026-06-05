import Portrait from '@src/assets/pictures/portrait.jpg';
import JsonBlock from '@src/components/ui/JsonBlock';
import { AboutInfoJson } from '@src/utils/constants/AboutInfoJson';

export default function AboutPage() {
  return (
    <main className='min-h-screen'>
      <div className='flex h-screen items-center justify-center'>
        <h1 className='font-title'>This is me</h1>
      </div>
      <div className='min-h-screen'>
        <div className='container flex h-screen'>
          <div className='flex h-full w-full items-center'>
            <JsonBlock data={AboutInfoJson} />
          </div>
          <div className='flex h-full w-full items-center justify-center'>
            <img
              src={Portrait}
              alt="Railey's Picture"
              className='relative z-10 aspect-square h-1/2 rounded-xl shadow-2xl'
            />
            <img
              src={Portrait}
              alt=''
              aria-hidden='true'
              className='absolute aspect-square h-5/9 rounded-xl shadow-2xl blur-xl grayscale'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
