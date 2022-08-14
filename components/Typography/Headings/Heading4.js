const Heading4 = ({ children, preventFiringEvents = false }) => {
  return (
    <h4
      className={`font-bellefair text-4xl leading-7 uppercase ${
        preventFiringEvents && 'pointer-events-none'
      }`}
    >
      {children}
    </h4>
  );
};

export default Heading4;
