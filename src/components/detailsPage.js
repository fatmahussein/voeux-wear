/* eslint-disable radix */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/dets.css';
import BackArrow from './BackArrow';

function DetailsPage() {
  const { index } = useParams();
  const prodDets = useSelector((state) => state.products.products);
  const prod = prodDets.find((product) => product.id === parseInt(index));
  if (!prod) {
    return <p>Product unavailable</p>;
  }
  return (
    <>
      <BackArrow />
      <div className="dets">
        <div className="img">
          <img alt="prod" src={prod.image} />
        </div>
        <p className="desc">{prod.description}</p>
        <p className="prices">
          $
          {prod.price}

        </p>
        <p className="cat">
          Category: &nbsp;
          {prod.category}

        </p>
        <p className="rating">
          Rating: &nbsp;
          {prod.rating.rate}

        </p>
      </div>
    </>
  );
}

export default DetailsPage;
