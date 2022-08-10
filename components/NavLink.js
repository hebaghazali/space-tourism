import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const NavLink = ({ children, href, exact }) => {
  const { pathname } = useRouter();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(exact ? pathname === href : pathname.startsWith(href));
    return () => {
      setIsActive(false);
    };
  }, [exact, pathname, href]);

  return (
    <li>
      <Link href={href}>
        <a
          className={`h-full flex items-center border-b-3 border-b-${
            isActive ? 'white' : 'transparent'
          } ${!isActive && 'hover:border-b-[#FFFFFF80]'} tracking-[2.7px]`}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

export default NavLink;
