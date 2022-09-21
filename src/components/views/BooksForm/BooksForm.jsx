import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useState } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";
import shortid from "shortid";

import { addBook } from "../../../redux/booksRedux";

const BooksForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const addBookHandler = (event) => {
    event.preventDefault();
    addBook({ id: shortid(), title, author, description, price });
  };
  return (
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
      <FormGroup controlId="description">
        <FormLabel>Description</FormLabel>
        <FormControl
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
      <Button type="submit" variant="primary">
        Add book
      </Button>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => dispatch(addBook(book)),
});

BooksForm.propTypes = {
  addBook: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(BooksForm);
