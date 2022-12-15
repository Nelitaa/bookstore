import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author } = props;
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(removeBook(event.target.id));
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={handleClick}>Remove</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
