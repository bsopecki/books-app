import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

import { getAllAuthors, removeAuthorBooks } from "../../../redux/booksRedux";

const AuthorsList = ({ authors, removeBooks }) => {
  return (
    <ListGroup>
      {authors.map((author, index) => (
        <ListGroupItem key={index}>
          {author}
          <Button
            className="ml-2"
            variant="danger"
            onClick={() => removeBooks(author)}
          >
            Delete books
          </Button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

const mapStateToProps = (state) => ({
  authors: getAllAuthors(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeBooks: (author) => dispatch(removeAuthorBooks(author)),
});

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired,
  removeBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);
