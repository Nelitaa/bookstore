const CHECK_STATUS = 'CHECK_STATUS';

const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return window.alert(action.payload);
    default:
      return state;
  }
};

const checkStatusAction = () => ({
  type: CHECK_STATUS,
  payload: 'Under construction',
});

export { checkStatusAction };
export default categoriesReducer;
