import {
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

import BooksForm from "../../views/BooksForm/BooksForm";

import "./BooksList.css";

const BooksList = ({books}) => {
  
  return (
    <div>
      <h2>Books list</h2>
      <ListGroup>
        {books.map((book) => (
          <ListGroupItem key={book.id}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.description}</p>
            <p>{`${book.price} PLN`}</p>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* <BooksForm /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.booksStore
})

BooksList.propTypes = {
  books: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(BooksList);
