import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCrew, setDestinations, setTechnology } from '../store/spaceSlice';
import getData from './api/staticdata';
import BodyText from '../components/Typography/BodyText';
import Heading1 from '../components/Typography/Headings/Heading1';
import Heading5 from '../components/Typography/Headings/Heading5';
import MainButton from './../components/MainButton';

export default function Home({ destinations, crew, technology }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDestinations(destinations));
    dispatch(setCrew(crew));
    dispatch(setTechnology(technology));
  }, [crew, destinations, dispatch, technology]);

  return (
    <>
      <div className='mb-[8.1875rem]'>
        <div>
          <Heading5>So, you want to travel to</Heading5>
          <Heading1>Space</Heading1>
          <BodyText>
            {`Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!`}
          </BodyText>
        </div>
      </div>

      <div className='mb-[8.1875rem]'>
        <MainButton>Explore</MainButton>
      </div>
    </>
  );
}

export const getStaticProps = () => {
  return getData();
};
