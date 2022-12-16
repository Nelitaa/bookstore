import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkStatusAction());
  };

  return (
    <div className="container-fluid p-5">
      <h1 className="text-secondary">Categories</h1>
      <button type="button" className="btn-blue text-uppercase m-3" onClick={handleClick}>Check status</button>
    </div>
  );
}

export default Categories;
