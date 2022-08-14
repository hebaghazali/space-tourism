const Heading = ({ children, idx }) => {
  return (
    <div className='absolute top-[4.75rem] left-[11.56%] tracking-wider flex'>
      <p className='opacity-25 pr-4 font-bold text-3xl leading-4'>{idx}</p>
      {children}
    </div>
  );
};

export default Heading;
