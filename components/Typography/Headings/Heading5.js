const Heading5 = ({ children, className }) => {
  return (
    <h5
      className={`font-barlow-condensed  ${
        className || 'text-gray'
      } text-3xl leading-6 tracking-wider uppercase`}
    >
      {children}
    </h5>
  );
};

export default Heading5;
