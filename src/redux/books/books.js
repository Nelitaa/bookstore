import { createAsyncThunk } from '@reduxjs/toolkit';
import BookService from '../../services/BookService';

const initialState = {
  books: [],
};

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const { data } = await BookService.getAll();
    return Object.keys(data).map((key) => ({ ...data[key][0], item_id: key }));
  },
);

const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (Book) => {
    const response = await BookService.create(Book);
    return response.data;
  },
);

const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id) => {
    await BookService.remove(id);
    return id;
  },
);

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'books/fetchBooks/fulfilled':
      return {
        ...state,
        books: action.payload,
      };
    case addNewBook.fulfilled:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case removeBook.fulfilled:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export { addNewBook, removeBook, fetchBooks };
export default booksReducer;
