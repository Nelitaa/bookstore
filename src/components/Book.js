import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, title, author } = props;
  return (
    <li key={id}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button">Remove</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
