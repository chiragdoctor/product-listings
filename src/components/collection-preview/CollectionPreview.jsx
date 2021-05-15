import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredProducts } from '../../redux/Product/product.actions';
import {
  selectFilteredProducts,
  selectProducts,
} from '../../redux/Product/product.selector';
import CollectionItem from '../collection-item/CollectionItem';
import CustomButton from '../custom-button/CustomButton';
import './CollectionPreview.scss';

const CollectionPreview = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(selectFilteredProducts);
  const [hide, setHide] = useState(true);
  const handleBtnClick = () => {
    if (hide) {
      const filteredProducts = products.filter(p => p.sold === false);
      dispatch(setFilteredProducts(filteredProducts));
    } else {
      dispatch(setFilteredProducts(products));
    }
    setHide(!hide);
  };
  return (
    <div className='collection-preview'>
      <h1 className='title'>Products ({filteredProducts.length})</h1>
      <CustomButton onClick={handleBtnClick}>
        {hide ? 'HIDE SOLD' : 'SHOW ALL'}
      </CustomButton>
      <div className='preview'>
        {filteredProducts.map(product => (
          <CollectionItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
