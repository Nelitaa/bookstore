import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/books';

const ListBooks = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const listBooks = books.map((book) => (
    <Book key={book.item_id} item_id={book.item_id} title={book.title} author={book.author} />
  ));

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <section className="container-fluid p-5">
      <ul className="row gap-3">
        {listBooks}
      </ul>
    </section>
  );
};

export default ListBooks;
