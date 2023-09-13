import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/products.css';

function Allproducts() {
  const productsArray = useSelector((state) => state.products.products);
  const [search, setSearch] = useState('');
  const handleSearch = (e) => { setSearch(e.target.value); };
  return (
    <>
      <div className="input">
        <input type="text" placeholder="search for an item" value={search} onChange={handleSearch} />
      </div>
      <div className="products">
        {productsArray
          .filter((filtered) => filtered.title.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <Link className="link" key={product.id} to={`/product/${product.id}`}>
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
