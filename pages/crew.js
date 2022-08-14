import Subheading1 from '../components/Typography/Headings/Subheading1';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCrew } from '../store/spaceSlice';
import getData from './api/staticdata';
import Image from 'next/image';
import BodyText from '../components/Typography/BodyText';
import Heading from '../components/Typography/Heading';
import Heading4 from './../components/Typography/Headings/Heading4';
import Heading3 from './../components/Typography/Headings/Heading3';
import Slider1 from './../components/Sliders/Slider1';

const Crew = props => {
  const { crew } = useSelector(state => state.space);
  const dispatch = useDispatch();

  const [selectedPerson, setSelectedPerson] = useState(0);

  useEffect(() => {
    crew.length === 0 && dispatch(setCrew(props.crew));
  }, [crew, dispatch, props.crew]);

  return (
    <>
      <Heading idx='02'>
        <Subheading1>meet your crew</Subheading1>
      </Heading>

      <div className='self-end min-w-[38.375rem] pb-[5.875rem] flex flex-col'>
        <Heading4 className='opacity-50'>{crew[selectedPerson]?.role}</Heading4>

        <div className='pt-[0.9375rem]'>
          <Heading3>{crew[selectedPerson]?.name}</Heading3>
        </div>

        <div className='h-[10rem] mt-[1.6875rem]'>
          <BodyText>{crew[selectedPerson]?.bio}</BodyText>
        </div>

        <div className='mt-[5.5rem]'>
          <Slider1
            crew={crew}
            selectedPerson={selectedPerson}
            setSelectedPerson={setSelectedPerson}
          />
        </div>
      </div>

      <div className='relative w-[615px] h-[712px]'>
        <Image
          src={crew[selectedPerson]?.images?.webp || '/assets/not_found.png'}
          alt='Person'
          layout='fill'
          objectFit='contain'
          objectPosition='center bottom'
        />
      </div>
    </>
  );
};

export default Crew;

export const getStaticProps = () => {
  return getData();
};
