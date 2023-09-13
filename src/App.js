import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './Redux/allproductsSlice';
import Home from './components/Home';
import DetailsPage from './components/detailsPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:index" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
