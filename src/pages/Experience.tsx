import ScrollHint from '@src/components/ui/ScrollHint';
import Stacks from '@src/components/ui/Stacks';
import Work from '@src/components/ui/Work';

export default function ExperiencePage() {
  return (
    <main className='flex flex-col'>
      <section className='relative flex h-screen items-center justify-center'>
        <h1 className='font-title text-center text-[40px] leading-15 font-bold sm:text-[48px] lg:text-[60px]'>
          I make things work
        </h1>
        <ScrollHint />
      </section>
      <section className='min-h-screen py-32'>
        <div className='container flex flex-col gap-32'>
          <Stacks />
          <Work />
        </div>
      </section>
    </main>
  );
}
