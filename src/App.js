import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import { setAllProducts } from './redux/Product/product.actions';
import { selectProducts } from './redux/Product/product.selector';
import { getProducts } from './services/product';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

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
