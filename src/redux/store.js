import { createStore } from "redux";
import books from "../books";

const reducer = function (state, action) {
  return state;
};

const inittialState = {
  booksStore: books,
};

const store = createStore(
  reducer,
  inittialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
