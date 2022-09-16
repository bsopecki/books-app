import { useState } from "react";
import PropTypes from "prop-types";
import {
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import shortid from "shortid";

import "./BooksList.css";

const BooksList = ({ books, addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  const addBookHandler = (event) => {
    event.preventDefault()
    addBook({id:shortid(),title,author,price})
  }

  return (
    <div>
      <h2>Books list</h2>
      <ListGroup>
        {books.map((book) => (
          <ListGroupItem
            key={book.id}
          >{`${book.title} by ${book.author} ${book.price}`}</ListGroupItem>
        ))}
      </ListGroup>
      <Form className="mt-4" onSubmit={addBookHandler}>
        <FormGroup controlId="title">
          <FormLabel>Title</FormLabel>
          <FormControl
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="author">
          <FormLabel>Author</FormLabel>
          <FormControl
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="price">
          <FormLabel>Price</FormLabel>
          <FormControl
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormGroup>
        <Button type="submit" variant="primary">Add book</Button>
      </Form>
    </div>
  );

  BooksList.propsTypes = {
    books: PropTypes.array.isRequired,
  };
};

export default BooksList;
