import Tab from './Tab';

const Tabs = ({ destinations, selectedPlanet, setSelectedPlanet }) => {
  const selectPlanet = e => {
    destinations.forEach((p, idx) => {
      p.name === e.target.innerHTML && setSelectedPlanet(idx);
    });
  };

  return (
    <ul className='flex gap-6 uppercase pb-[2.3125rem] tracking-[2.7px] leading-[1.1875rem]'>
      {destinations.map(planet => (
        <Tab
          key={planet.name}
          planetIsSelected={destinations[selectedPlanet]?.name === planet.name}
          selectPlanet={selectPlanet}
        >
          {planet.name}
        </Tab>
      ))}
    </ul>
  );
};

export default Tabs;
