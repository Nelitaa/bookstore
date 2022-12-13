import { configureStore } from '@reduxjs/toolkit';
import Books from './books/Books';
import Categories from './categories/Categories';

const store = configureStore({
  reducer: {
    Books,
    Categories,
  },
});

export default store;
