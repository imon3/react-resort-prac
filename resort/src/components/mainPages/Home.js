import React from 'react';
import Hero from '../hero/Hero';
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Hero>
      <Banner title='luxurious rooms' subtitile='deluxe rooms starting at $299'>
        <Link to='/rooms' className='btn-primary'>
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;
