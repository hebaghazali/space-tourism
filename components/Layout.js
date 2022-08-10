import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='bg-home bg-no-repeat bg-cover bg-[#0B0D17] w-screen h-screen pt-[2.5rem]'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
