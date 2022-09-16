import PropTypes from 'prop-types'
import { connect } from "react-redux";

import './BooksSummary.css';

const BooksSummary = ({books}) => {
    return (
        <section className='mt-4'>
            <h3>Books summary..</h3>
            <p>There are {books.length} books in the app</p>
        </section>
    )
}

const mapStateToProps = (state) => ({
    books: state.booksStore
  })

BooksSummary.propTypes = {
    books: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(BooksSummary)