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
        <p className="text-category my-1">Action</p>
        <h3 className="text-roboto m-0">{title}</h3>
        <p className="text-roboto text-author">{author}</p>
        <div className="d-flex align-items-center">
          <button type="button" className="btn-white text-roboto text-author">Comments</button>
          <div className="vertical-line" />
          <button type="button" className="btn-white text-roboto text-author" onClick={handleClick}>Remove</button>
          <div className="vertical-line" />
          <button type="button" className="btn-white text-roboto text-author">Edit</button>
        </div>
      </div>
      <div className="col row align-content-center">
        <div className="col d-flex justify-content-end">
          <div className="circular-progress" />
        </div>
        <div className="col row align-content-center p-0">
          <p className="h3 m-0">64%</p>
          <p className="text-secondary small m-0">Completed</p>
        </div>
      </div>
      <div className="col-2 align-self-center p-0">
        <div className="progress-divider" />
      </div>
      <div className="col align-content-center text-roboto">
        <p className="text-uppercase text-secondary small m-0 text-chapter">Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="text-uppercase btn-blue">Update progress</button>
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
