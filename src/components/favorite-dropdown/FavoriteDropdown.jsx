import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unlikeProduct } from '../../redux/Product/product.actions';
import { selectLikedProducts } from '../../redux/Product/product.selector';
import './FavoriteDropdown.scss';

const FavoriteDropdown = () => {
  const dispatch = useDispatch();
  const liked = useSelector(selectLikedProducts);
  const handleRemoveFavorites = product => {
    dispatch(unlikeProduct(product));
  };

  return (
    <div className='fav-dropdown'>
      <div className='fav-items'>
        {liked.length ? (
          liked.map(like => (
            <div key={like.id} className='fav-item-list'>
              {like.name}
              <button
                className='cross-button'
                onClick={() => handleRemoveFavorites(like)}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <span className='empty-message'>
            Your don't have any liked products
          </span>
        )}
      </div>
    </div>
  );
};

export default FavoriteDropdown;
