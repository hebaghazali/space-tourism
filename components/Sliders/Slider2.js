import Heading4 from './../Typography/Headings/Heading4';

const Slider2 = ({ technology, selectedTechnology, setSelectedTechnology }) => {
  const selectTechnology = e => {
    technology.forEach(tech => {
      tech.name === e.target.id &&
        setSelectedTechnology(technology.indexOf(tech));
    });
  };

  return (
    <div className='flex flex-col gap-6 cursor-pointer'>
      {technology.map((tech, idx) => (
        <div
          key={tech.name}
          id={tech.name}
          className={`w-20 h-20 rounded-full flex justify-center items-center border-1 border-[#ffffff40] ${
            tech.name === technology[selectedTechnology]?.name
              ? 'bg-white text-black'
              : 'bg-transparent text-white'
          }`}
          onClick={selectTechnology}
        >
          <Heading4 preventFiringEvents>{idx + 1}</Heading4>
        </div>
      ))}
    </div>
  );
};

export default Slider2;
