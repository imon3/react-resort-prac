import React from 'react';
import logo from '../../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavLinks from '../navLinks/NavLinks';

class Navbar extends React.Component {
  state = {
    isOpen: false
  };

  handletoggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <Link to='/'>
              <img src={logo} alt='Beach Rresort' />
            </Link>
            <button
              type='button'
              className='nav-btn'
              onClick={this.handletoggle}
            >
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <NavLinks />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
