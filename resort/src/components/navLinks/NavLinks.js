import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/rooms'>Rooms</Link>
      </li>
    </>
  );
};

export default NavLinks;
