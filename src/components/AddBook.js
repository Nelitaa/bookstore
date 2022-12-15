import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addNewBook, fetchBooks } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    title: '',
    author: '',
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: v4(),
      title: state.title,
      author: state.author,
      category: '',
    };
    dispatch(addNewBook(newBook));
    dispatch(fetchBooks());
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Book title" name="title" onChange={handleChange} />
        <input type="text" placeholder="Book author" name="author" onChange={handleChange} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
