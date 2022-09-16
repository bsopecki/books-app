import './BooksSummary.css';

const BooksSummary = ({books}) => {
    return (
        <section className='mt-4'>
            <h3>Books summary..</h3>
            <p>There are {books.length} books in the app</p>
        </section>
    )
}

export default BooksSummary