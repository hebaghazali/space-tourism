import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/assets/shared/logo.svg';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className='flex justify-between ml-[55px] font-barlow-condensed text-white uppercase h-24'>
      <Link href='/'>
        <a
          className='flex items-center'
          style={{ clipPath: 'circle(33% at 50% 50%)' }}
        >
          <Image
            src={logo}
            alt='logo'
            width='48px'
            height='48px'
            objectFit='contain'
            className='cursor-pointer'
          />
        </a>
      </Link>

      <ul className='bg-white/[.04] backdrop-blur-[5rem] w-[57.63vw] pr-[2.5%] flex justify-center gap-12 text-base relative'>
        <div className='absolute top-[50%] left-[-52%] w-[33vw] h-px bg-white opacity-25'></div>
        {[
          ['Home', '/'],
          ['Destination', '/destination'],
          ['Crew', '/crew'],
          ['Technology', '/technology'],
        ].map(([title, pathname], idx) => {
          return (
            <NavLink key={idx} href={pathname} exact={pathname === '/'}>
              <span className='font-bold pr-2'>0{idx}</span> {title}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
