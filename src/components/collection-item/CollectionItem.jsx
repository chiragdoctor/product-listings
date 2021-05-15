import React from 'react';
import PropTypes from 'prop-types';
import './CollectionItem.scss';

const CollectionItem = ({ product }) => {
  const { name, img, price, brand, size } = product;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${img})` }} />
      <div className='collection-footer'>
        <span className='desc'>{name}</span>
        <span className='desc'>{brand}</span>
        <span className='desc'>{size}</span>
        <span className='price'>${price}</span>
      </div>
    </div>
  );
};

CollectionItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CollectionItem;
