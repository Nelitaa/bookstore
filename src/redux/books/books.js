const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [
    { id: 1, title: 'The Hunger Games', author: 'Suzanne Collins' },
    { id: 2, title: 'Divergent', author: 'Veronica Roth' },
    { id: 3, title: 'Ender\'s Game', author: 'Orson Scott Card' },
  ],
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
