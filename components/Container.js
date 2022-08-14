const Container = ({ children }) => {
  return (
    <div className='min-h-[calc(100vh-8.5rem)]'>
      <div
        className='font-barlow flex justify-between items-end text-white relative pt-[4.75rem] px-[10.3125rem]'
        style={{ minHeight: 'inherit' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
