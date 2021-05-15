import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/Product/product.selector';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = () => {
  const products = useSelector(selectProducts);
  return (
    <div className='collection-preview'>
      <h1 className='title'>Products ({products.length})</h1>
      <div className='preview'>
        {products.map(product => (
          <CollectionItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
