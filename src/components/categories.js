import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../Redux/categorySlice';
import '../styles/category.css';

function Categories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  const selector = useSelector((state) => state.category);
  const categoryArray = Object.values(selector);
  // const {
  //   category, isLoading, isError,
  // } = useSelector((store) => store.category);
  // if (isLoading) {
  //   return <p className="info">Loading....Please wait</p>;
  // }
  // if (isError) {
  //   return <p className="info">Sorry, please try again</p>;
  // }
  // if (category.length === 0) return
  // <p className="info">Sorry, no categories available at the moment</p>;
  return (
    <>
      {categoryArray.map((category) => (
        <ul className="Ul-list" key={category}>
          <li className="cat">{category[1]}</li>
          <li className="cat">{category[2]}</li>
          <li className="cat">{category[3]}</li>
        </ul>
      ))}
    </>
  );
}
export default Categories;
