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
    <li className="container pt-3 bg-white border">
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-secondary">Action</p>
        <h3>{title}</h3>
        <p className="text-primary">{author}</p>
        <button type="button" className="btn btn-outline-light text-primary">Comments</button>
        <button type="button" className="btn btn-outline-light text-primary" onClick={handleClick}>Remove</button>
        <button type="button" className="btn btn-outline-light text-primary">Edit</button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p>64%</p>
        <div className="progress">m</div>
        <p className="text-secondary">Completed</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p className="text-uppercase text-secondary">Current Chapter</p>
        <p>Chapter 17</p>
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
