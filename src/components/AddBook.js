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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBook = {
      item_id: v4(),
      title: state.title,
      author: state.author,
      category: '',
    };
    await dispatch(addNewBook(newBook));
    await dispatch(fetchBooks());
    setState({ title: '', author: '' });
  };

  return (
    <section className="container-fluid p-5">
      <h1 className="text-uppercase text-secondary h4">Add new book</h1>
      <form className="container-fluid row gap-5 py-3" onSubmit={handleSubmit}>
        <input type="text" className="form-control p-3 col" placeholder="Book title" value={state.title} name="title" onChange={handleChange} />
        <input type="text" className="form-control col" placeholder="Book author" value={state.author} name="author" onChange={handleChange} />
        <button type="submit" className="text-uppercase btn-blue text-roboto col-1">Add book</button>
      </form>
    </section>
  );
}

export default AddBook;
