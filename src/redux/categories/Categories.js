const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    default:
      return state;
  }
};

const checkStatusAction = (category) => ({
  type: CHECK_STATUS,
  payload: category,
});

export { checkStatusAction };
export default categoriesReducer;
