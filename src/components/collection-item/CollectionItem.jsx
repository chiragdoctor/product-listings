import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ThumbsUpIcon } from '../../assets/thumbs-up.svg';
import './CollectionItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectLikedProducts } from '../../redux/Product/product.selector';
import {
  likeProduct,
  unlikeProduct,
} from '../../redux/Product/product.actions';

const CollectionItem = ({ product }) => {
  const { id, name, img, price, brand, size } = product;
  const dispatch = useDispatch();
  const liked = useSelector(selectLikedProducts);
  const handleLike = product => {
    if (liked.some(p => p.id === product.id)) {
      dispatch(unlikeProduct(product));
    } else {
      dispatch(likeProduct(product));
    }
  };

  const checkProductLiked = productId => {
    return liked.some(liked => liked.id === productId);
  };

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${img})` }}>
        <div
          className={`thumbs-up-container ${
            checkProductLiked(id) ? 'container-red' : ''
          }`}
          onClick={() => handleLike(product)}
        >
          <ThumbsUpIcon className='thumbs-up-icon' />
        </div>
      </div>
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
