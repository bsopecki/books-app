import { ListGroup,ListGroupItem } from 'react-bootstrap';

import './AuthorsList.css';

const AuthorsList = ({books}) => {
    return (
        <ListGroup>
            {books.map(book=> <ListGroupItem key={book.id}>{book.author}</ListGroupItem>)}
        </ListGroup>
    )
}

export default AuthorsList