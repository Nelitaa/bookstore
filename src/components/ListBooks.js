import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const ListBooks = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
    </ul>
  );
};

export default ListBooks;
