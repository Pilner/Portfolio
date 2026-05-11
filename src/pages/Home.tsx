import FRV_Logo from '@src/assets/logo/FRV_Logo.svg';

export default function HomePage() {
  return (
    <main className='h-screen'>
      <div className='flex h-full items-center justify-center'>
        <img src={FRV_Logo} alt='FRV Logo' className='w-60 md:w-80 lg:w-100' />
      </div>
    </main>
  );
}
