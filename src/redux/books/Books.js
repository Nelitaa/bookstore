const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

const addBookAction = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export { addBookAction, removeBookAction };
export default booksReducer;
