const NavText = ({ children, color }) => {
  return (
    <p
      className={`font-barlow-condensed leading-2 tracking-wide inline text-${
        color || 'white'
      }`}
    >
      {children}
    </p>
  );
};

export default NavText;
