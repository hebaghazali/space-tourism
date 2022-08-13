import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  const param = pathname === '/' ? 'home' : pathname.slice(1);

  return (
    <div
      className={`bg-${param} bg-fixed bg-no-repeat bg-cover bg-black w-screen min-h-screen pt-[2.5rem]`}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
