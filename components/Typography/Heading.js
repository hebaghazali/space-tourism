const Heading = ({ children, idx }) => {
  return (
    <div className='absolute top-[4.75rem] left-[11.56%] tracking-[4.725px] flex'>
      <p className='opacity-25 pr-4 font-bold text-[1.75rem] leading-[1.8rem]'>
        {idx}
      </p>
      {children}
    </div>
  );
};

export default Heading;
