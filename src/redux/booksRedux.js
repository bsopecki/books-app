const createActionName = function (name) {
  return `app/books/${name}`;
};

const ADD_BOOK = createActionName("ADD_BOOK");
const REMOVE_BOOK = createActionName("REMOVE_BOOK");
const REMOVE_AUTHOR_BOOKS = createActionName("REMOVE_AUTHOR_BOOKS");

// selectors
export const getAllBooks = (state) =>  state.books;
export const getAllAuthors = (state) => [
  ...new Set(state.books.map((book) => book.author)),
];
export const countBooks = (state) => state.books.length;
export const getBooksByAuthors = (state, author) =>
  state.books.filter((book) => book.author === author);

// action creators
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });
export const removeAuthorBooks = (payload) => ({
  type: REMOVE_AUTHOR_BOOKS,
  payload,
});

const reducer = function (statePart = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...statePart, action.payload];
    case REMOVE_BOOK:
      return statePart.filter((book) => book.id !== action.payload);
    case REMOVE_AUTHOR_BOOKS:
      return statePart.filter((book) => book.author !== action.payload);
    default:
      return statePart;
  }
};


export default reducer;
