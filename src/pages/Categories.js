import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatusAction());
  };

  return (
    <div>
      <h2>Categories</h2>
      <button type="button" onClick={handleClick}>Check status</button>
    </div>
  );
}

export default Categories;
