import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider2 from '../components/Sliders/Slider2';
import Heading from '../components/Typography/Heading';
import { setTechnology } from '../store/spaceSlice';
import Subheading1 from './../components/Typography/Headings/Subheading1';
import getData from './api/staticdata';
import NavText from './../components/Typography/NavText';
import Heading3 from './../components/Typography/Headings/Heading3';
import BodyText from './../components/Typography/BodyText';
import Image from 'next/image';

const Technology = props => {
  const { technology } = useSelector(state => state.space);
  const dispatch = useDispatch();

  const [selectedTechnology, setSelectedTechnology] = useState(0);

  useEffect(() => {
    technology.length === 0 && dispatch(setTechnology(props.technology));
  }, [technology, dispatch, props.technology]);

  useEffect(() => {
    console.log(technology);
  }, [technology]);

  return (
    <>
      <Heading idx='03'>
        <Subheading1>space launch 101</Subheading1>
      </Heading>

      <div className='flex mb-[13.375rem] mt-[1.625rem] h-[303px]'>
        <Slider2
          technology={technology}
          selectedTechnology={selectedTechnology}
          setSelectedTechnology={setSelectedTechnology}
        />

        <div className='ml-[5rem]'>
          <NavText color='gray'>THE TERMINOLOGY…</NavText>
          <div className='mt-[0.6875rem]'>
            <Heading3>{technology[selectedTechnology]?.name}</Heading3>
          </div>
          <div className='mt-[1.0625rem]'>
            <BodyText>{technology[selectedTechnology]?.description}</BodyText>
          </div>
        </div>
      </div>

      <div className='mb-[6.3125rem] mr-[-10rem] mt-[1.625rem]'>
        <Image
          src={
            technology[selectedTechnology]?.images?.portrait ||
            '/assets/not_found.png'
          }
          alt='Technology'
          width='515px'
          height='527px'
        />
      </div>
    </>
  );
};

export default Technology;

export const getStaticProps = () => {
  return getData();
};
