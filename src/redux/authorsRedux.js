const createActionName = function (name) {
  return `app/authors/${name}`;
};

const ADD_AUTHOR = createActionName("ADD_AUTHOR");

// action creators
export const addAuthor = (payload) => ({ type: ADD_AUTHOR, payload });

const reducer = function (statePart = [], action = {}) {
  switch (action.type) {
    case ADD_AUTHOR:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
};

export default reducer;
