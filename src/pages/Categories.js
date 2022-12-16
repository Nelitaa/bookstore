import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatusAction());
  };

  return (
    <div className="container p-5">
      <h1>Categories</h1>
      <button type="button" className="btn text-uppercase btn-primary my-3" onClick={handleClick}>Check status</button>
    </div>
  );
}

export default Categories;
