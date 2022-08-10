import Head from 'next/head';

export default function Home() {
  return (
    <div className='h-[calc(100vh-(8.5rem+14.5vh))]'>
      <Head>
        <title>Space Tourism | Home</title>
        <meta name='description' content='Space Tourism Home' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main
        className='font-barlow flex justify-around items-end'
        style={{ height: 'inherit' }}
      >
        <p className='font-barlow-condensed text-[#D0D6F9] leading-[32px] w-[444px] text-lg'>
          <span className='tracking-[4.725px] leading-[34px] uppercase text-[1.75rem]'>
            So, you want to travel to{' '}
          </span>
          <span className='block font-bellefair text-white text-[9.375rem] uppercase leading-[172px]'>
            Space
          </span>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        {/* absolute right-[165px] bottom-[131px] */}
        <button className='rounded-full bg-white text-black font-bellefair uppercase w-[17.125rem] h-[17.125rem] text-[2rem] leading-8 tracking-[2px] hover:shadow-w transition-shadow duration-200 ease-linear'>
          Explore
        </button>
      </main>
    </div>
  );
}
