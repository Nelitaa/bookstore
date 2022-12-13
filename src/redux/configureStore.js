import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './redux/books/books';
import categoriesReducer from './redux/categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
