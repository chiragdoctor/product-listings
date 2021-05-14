import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import { getProducts } from './services/product';

function App() {
  const getAllProducts = async () => {
    const products = await getProducts();
    console.log('products :>> ', products);
  };
  useEffect(() => {
    getAllProducts();
  });

  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
