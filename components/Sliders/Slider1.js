const Slider1 = ({ crew, selectedPerson, setSelectedPerson }) => {
  const selectPerson = e => {
    setSelectedPerson(crew.findIndex(person => person.name === e.target.id));
  };

  return (
    <div className='flex gap-6'>
      {crew.map(person => (
        <div
          key={person.name}
          id={person.name}
          className={`rounded-full w-[15px] h-[15px] bg-white cursor-pointer ${
            person.name === crew[selectedPerson].name
              ? 'opacity-100'
              : 'opacity-17'
          } `}
          onClick={selectPerson}
        ></div>
      ))}
    </div>
  );
};

export default Slider1;
