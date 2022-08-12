import { useRouter } from 'next/router';

const Container = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div
      className={`${
        pathname !== '/'
          ? 'min-h-[36rem] pb-[7rem]'
          : 'min-h-[calc(100vh-16.1875rem)]'
      }`}
    >
      <div
        className='font-barlow flex justify-around text-white relative pt-[4.75rem]'
        style={{ minHeight: 'inherit' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
