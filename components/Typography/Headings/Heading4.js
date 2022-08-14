const Heading4 = ({ children, preventFiringEvents = false, className }) => {
  return (
    <h4
      className={`font-bellefair text-4xl leading-7 uppercase ${
        preventFiringEvents && 'pointer-events-none'
      } ${className || ''}`}
    >
      {children}
    </h4>
  );
};

export default Heading4;
