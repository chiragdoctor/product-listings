import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as ThumbsUpIcon } from '../../assets/thumbs-up.svg';
import { toggleFavoriteDropdown } from '../../redux/Product/product.actions';
import './FavoritePreview.scss';

const FavoritePreview = () => {
  const dispatch = useDispatch();
  return (
    <div
      className='fav-icon-container'
      onClick={() => dispatch(toggleFavoriteDropdown())}
    >
      <ThumbsUpIcon className='fav-icon' />
    </div>
  );
};

export default FavoritePreview;
