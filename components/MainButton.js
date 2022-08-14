const MainButton = ({ children }) => {
  return (
    <button className='rounded-full bg-white text-black font-bellefair uppercase w-[17.125rem] h-[17.125rem] text-[2rem] leading-8 tracking-[2px] hover:shadow-w transition-shadow duration-200 ease-linear self-end'>
      {children}
    </button>
  );
};

export default MainButton;