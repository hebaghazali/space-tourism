const Heading = ({ children, idx }) => {
  return (
    <p className='font-barlow-condensed leading-[2.125rem] tracking-[4.725px] uppercase absolute top-[4.75rem] left-[11.56%] text-[1.75rem]'>
      <span className='opacity-25 pr-4'>{idx}</span>
      {children}
    </p>
  );
};

export default Heading;
