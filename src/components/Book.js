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
    <li>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={handleClick}>Remove</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
