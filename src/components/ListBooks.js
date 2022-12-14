import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const ListBooks = () => {
  const books = useSelector((state) => state.books.books);
  const listBooks = books.map((book) => (
    <Book key={book.id} id={book.id} title={book.title} author={book.author} />
  ));

  return (
    <ul>
      {listBooks}
    </ul>
  );
};

export default ListBooks;
