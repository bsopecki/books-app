import { ListGroupItem, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const BookItem = ({ book, removeBook }) => (
  <ListGroupItem>
    <p>{book.title}</p>
    <p>{book.author}</p>
    <p>{book.description}</p>
    <p>{`${book.price} PLN`}</p>
    <Button
      className="ml-2"
      variant="danger"
      onClick={() => removeBook(book.id)}
    >
      Delete
    </Button>
  </ListGroupItem>
);

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default BookItem;
