import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import CollectionPreview from './components/collection-preview/CollectionPreview';
import Header from './components/header/Header';
import { setAllProducts } from './redux/Product/product.actions';
import { getProducts } from './services/product';
// import products from './data/products.json';

function App() {
  const dispatch = useDispatch();
  const getAllProducts = useCallback(async () => {
    const products = await getProducts();
    dispatch(setAllProducts(products));
  }, [dispatch]);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div className='App'>
      <Header />
      <CollectionPreview />
    </div>
  );
}

export default App;
