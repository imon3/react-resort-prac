import React from 'react';
import Hero from '../hero/Hero';
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';
import Services from '../typeServices/Services';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='deluxe rooms starting at $299'
        >
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;
