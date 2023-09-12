import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailsPage() {
  const { index } = useParams();
  const prodDets = useSelector((state) => state.products.products);
  const prod = prodDets.find((product) => product.id === index);
  if (!prod) {
    return <p>Product unavailable</p>;
  }
  return (
    <div>
      <img alt="prod" src={prod.image} />
      <p>{prod.description}</p>
      <p>{prod.price}</p>
      <p>{prod.category}</p>
      <p>{prod.rating.rate}</p>
    </div>
  );
}

export default DetailsPage;
