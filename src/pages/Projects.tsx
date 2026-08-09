import Projects from '@src/components/ui/Projects';
import ScrollHint from '@src/components/ui/ScrollHint';

export default function ProjectsPage() {
  return (
    <main className='flex flex-col'>
      <section className='relative flex h-screen items-center justify-center'>
        <h1 className='font-title text-center text-[40px] leading-15 font-bold sm:text-[48px] lg:text-[60px]'>
          Also made these
          <br />
          awesome stuffs
        </h1>
        <ScrollHint />
      </section>
      <Projects />
    </main>
  );
}
