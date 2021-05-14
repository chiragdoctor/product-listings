import React from 'react';
import './Header.scss';
import Logo from './Logo';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Logo className='logo' />
      </div>
      <div className='favorite-container'>Favorites</div>
    </div>
  );
};

export default Header;
