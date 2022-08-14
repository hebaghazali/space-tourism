import Subheading1 from '../components/Typography/Headings/Subheading1';
import Subheading2 from '../components/Typography/Headings/Subheading2';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setDestinations } from '../store/spaceSlice';
import getData from './api/staticdata';
import Image from 'next/image';
import BodyText from '../components/Typography/BodyText';
import Heading from '../components/Typography/Heading';
import Heading2 from '../components/Typography/Headings/Heading2';
import Heading5 from '../components/Typography/Headings/Heading5';
import Tabs from './../components/Tabs';

const Destination = props => {
  const { destinations } = useSelector(state => state.space);
  const dispatch = useDispatch();

  const [selectedPlanet, setSelectedPlanet] = useState(0);

  useEffect(() => {
    destinations.length === 0 && dispatch(setDestinations(props.destinations));
  }, [destinations, dispatch, props.destinations]);

  return (
    <>
      <Heading idx='01'>
        <Heading5 className='text-white'>pick your destination</Heading5>
      </Heading>

      <div className='mt-[8.125rem] mb-[7rem] translate-x-16'>
        <Image
          src={
            destinations[selectedPlanet]?.images?.webp ||
            '/assets/not_found.png'
          }
          alt='Planet'
          width='445px'
          height='445px'
        />
      </div>

      <div className='mt-[6.125rem] font-barlow-condensed w-box-width mb-[7rem]'>
        <Tabs
          destinations={destinations}
          selectedPlanet={selectedPlanet}
          setSelectedPlanet={setSelectedPlanet}
        />

        <Heading2>{destinations[selectedPlanet]?.name}</Heading2>

        <div className='pt-[1rem]'>
          <BodyText>{destinations[selectedPlanet]?.description}</BodyText>
        </div>

        <div className='flex gap-[5rem] uppercase leading-3 border-t border-t-[#383B4B] pt-7 mt-[3.375rem]'>
          <div className='flex flex-col gap-3'>
            <Subheading2>avg. distance</Subheading2>
            <Subheading1>{destinations[selectedPlanet]?.distance}</Subheading1>
          </div>
          <div className='flex flex-col gap-3'>
            <Subheading2>est. travel time</Subheading2>
            <Subheading1>{destinations[selectedPlanet]?.travel}</Subheading1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;

export const getStaticProps = () => {
  return getData();
};
