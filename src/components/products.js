import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../Redux/allproductsSlice';
import '../styles/products.css';

function Allproducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const productsArray = useSelector((state) => state.products.products);

  return (
    <>
      <div className="products">
        {productsArray.map((product) => (
          <Link key={product.index} to={`/product/${product.index}`}>
            <div className="product" key={product.id}>
              <img alt="product-img" src={product.image} />
              <p>{product.title}</p>
              <p className="price">
                $
                {product.price}

              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
export default Allproducts;
