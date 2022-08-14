const Tab = ({ planetIsSelected, selectPlanet, children }) => {
  return (
    <li
      className={`cursor-pointer pb-3 border-b-[#979797] hover:border-b-3 ${
        planetIsSelected
          ? 'text-[#FFFFFF] border-b-3 border-b-white'
          : 'text-gray'
      }`}
      onClick={selectPlanet}
    >
      {children}
    </li>
  );
};

export default Tab;
