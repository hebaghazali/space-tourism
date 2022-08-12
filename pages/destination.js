import Head from 'next/head';
import Heading from './../components/Heading';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setDestinations } from '../store/spaceSlice';
import getData from './api/staticdata';
import Image from 'next/image';

const Destination = props => {
  const { destinations } = useSelector(state => state.space);
  const dispatch = useDispatch();

  const [destinationsObject, setDestinationsObject] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('');

  useEffect(() => {
    if (destinations.length === 0) {
      dispatch(setDestinations(props.destinations));
      setDestinationsObject(props.destinations);
    } else {
      setDestinationsObject(destinations);
    }
  }, []);

  useEffect(() => {
    console.log(destinationsObject);

    setSelectedPlanet(destinationsObject[0]);
  }, [destinationsObject]);

  useEffect(() => {
    // selectedPlanet?.images?.webp && console.log(selectedPlanet?.images?.webp);
  }, [selectedPlanet]);

  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
        <meta name='description' content='Space Tourism Destination' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Heading idx='01'>pick your destination</Heading>

      <div className='mt-[8.125rem] translate-x-16'>
        <Image
          src={selectedPlanet?.images?.webp || '/assets/not_found.png'}
          alt='Planet'
          width='445px'
          height='445px'
        />
      </div>

      <div className='mt-[6.125rem] font-barlow-condensed w-[27.75rem]'>
        <ul className='flex gap-6 uppercase pb-[2.3125rem] tracking-[2.7px] leading-[1.1875rem]'>
          {destinationsObject.map(planet => (
            <li
              key={planet.name}
              className={`cursor-pointer pb-3 border-b-[#979797] hover:border-b-3 ${
                selectedPlanet?.name === planet.name
                  ? 'text-[#FFFFFF] border-b-3 border-b-white'
                  : 'text-[#D0D6F9]'
              }`}
              onClick={e => {
                destinationsObject.forEach(p => {
                  p.name === e.target.innerHTML && setSelectedPlanet(p);
                });
              }}
            >
              {planet.name}
            </li>
          ))}
        </ul>

        <h1 className='text-[6.25rem] font-bellefair uppercase leading-[7.1875rem]'>
          {selectedPlanet?.name}
        </h1>

        <p className='text-[#D0D6F9] text-lg pb-[3.375rem] pt-[1rem] font-barlow leading-[2rem]'>
          {selectedPlanet?.description}
        </p>

        <div className='flex gap-[5rem] uppercase text-[#D0D6F9] leading-[1.75rem] border-t border-t-[#383B4B] pt-7'>
          <div className=''>
            <p>avg. distance</p>
            <h2 className='text-white font-bellefair'>
              {selectedPlanet?.distance}
            </h2>
          </div>
          <div>
            <p>est. travel time</p>
            <h2 className='text-white font-bellefair'>
              {selectedPlanet?.travel}
            </h2>
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
