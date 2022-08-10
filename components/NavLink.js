import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const NavLink = ({ children, href }) => {
  const { pathname } = useRouter();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log(href);
    console.log(pathname);
    console.log(pathname === href);
    console.log('----');
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <li>
      <Link href={href}>
        <a
          className={`nav-item h-full flex items-center tracking-[2.7px] ${
            isActive && 'active'
          }`}
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
