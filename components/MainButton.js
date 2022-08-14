const MainButton = ({ children }) => {
  return (
    <button className='rounded-full bg-white text-black font-bellefair uppercase w-[17.125rem] h-[17.125rem] text-4xl leading-8 tracking-tight hover:shadow-w transition-shadow duration-200 ease-linear'>
      {children}
    </button>
  );
};

export default MainButton;
