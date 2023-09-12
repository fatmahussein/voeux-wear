import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../Redux/categorySlice';

function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const selector = useSelector((state) => state.category);

  return (
    <div>
      {selector.map((category) => (

        <h1 key={category}>{category}</h1>

      ))}
    </div>
  );
}

export default Categories;
