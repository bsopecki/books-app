import PropTypes from 'prop-types'
import { connect } from "react-redux";

import { ListGroup,ListGroupItem } from 'react-bootstrap';

import './AuthorsList.css';

const AuthorsList = ({books}) => {
    return (
        <ListGroup>
            {books.map(book=> <ListGroupItem key={book.id}>{book.author}</ListGroupItem>)}
        </ListGroup>
    )
}

const mapStateToProps = (state) => ({
    books: state.booksStore
  })

AuthorsList.propTypes = {
    books: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(AuthorsList)