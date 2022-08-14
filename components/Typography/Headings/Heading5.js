const Heading5 = ({ children, className }) => {
  return (
    <h4
      className={`font-barlow-condensed  ${
        className || 'text-gray'
      } text-[1.75rem] leading-[2.125rem] tracking-[4.725px] uppercase`}
    >
      {children}
    </h4>
  );
};

export default Heading5;