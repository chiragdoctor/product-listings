import React from 'react';
import { useSelector } from 'react-redux';
import { selectHidden } from '../../redux/Product/product.selector';
import FavoriteDropdown from '../favorite-dropdown/FavoriteDropdown';
import FavoritePreview from '../favorite-preview/FavoritePreview';
import './Header.scss';
import Logo from './Logo';

const Header = () => {
  const hidden = useSelector(selectHidden);
  return (
    <div className='header'>
      <div className='logo-container'>
        <Logo className='logo' />
      </div>
      <FavoritePreview />
      {hidden ? null : <FavoriteDropdown />}
    </div>
  );
};

export default Header;
