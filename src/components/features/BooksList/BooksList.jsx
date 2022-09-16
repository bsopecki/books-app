import {
  ListGroup,
  ListGroupItem
} from "react-bootstrap";

import BooksForm from "../../views/BooksForm/BooksForm";

import "./BooksList.css";

const BooksList = ({ books,addBook }) => {
  
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
      <BooksForm  addBook={addBook}/>
    </div>
  );
};

export default BooksList;
