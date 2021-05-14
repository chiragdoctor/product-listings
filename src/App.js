import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import { setAllProducts } from './redux/Product/product.actions';
import { getProducts } from './services/product';

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
    </div>
  );
}

export default App;
