import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBookAction(id));
  };

  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={handleClick}>Remove</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
