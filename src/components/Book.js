import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, fetchBooks } from '../redux/books/books';

const Book = (props) => {
  // eslint-disable-next-line camelcase
  const { item_id, title, author } = props;
  const dispatch = useDispatch();

  const handleClick = async () => {
    await dispatch(removeBook(item_id));
    await dispatch(fetchBooks());
  };

  return (
    <li className="row bg-white border rounded p-5">
      <div className="col">
        <p className="text-secondary h5">Action</p>
        <h3 className="my-0">{title}</h3>
        <p className="text-especial">{author}</p>
        <button type="button" className="btn-especial text-especial px-0">Comments</button>
        <div className="vr" />
        <button type="button" className="btn-especial text-especial" onClick={handleClick}>Remove</button>
        <button type="button" className="btn-especial text-especial">Edit</button>
      </div>
      <div className="col row align-content-center">
        <div className="col progress">
          <div className="circular-progress" />
        </div>
        <div className="col">
          <p className="h1 my-0">64%</p>
          <p className="text-secondary">Completed</p>
        </div>
      </div>
      <div className="col row align-content-center">
        <p className="text-uppercase text-secondary px-0 my-1">Current Chapter</p>
        <p className="p-0">Chapter 17</p>
        <button type="button" className="btn text-uppercase btn-primary">Update progress</button>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
