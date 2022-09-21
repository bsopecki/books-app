import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import BooksForm from "../../views/BooksForm/BooksForm";
import BookItem from "../../views/BookItem/BookItem";

import { getAllBooks, removeBook } from "../../../redux/booksRedux";


const BooksList = ({ data, removeBook }) => {
  return (
    <div>
      <h2>Books list</h2>
      <ListGroup className="mt-4">
        {data.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            removeBook={() => removeBook(book.id)}
          />
        ))}
      </ListGroup>
      <BooksForm />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: getAllBooks(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (bookId) => dispatch(removeBook(bookId)),
});

BooksList.propTypes = {
  data: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
