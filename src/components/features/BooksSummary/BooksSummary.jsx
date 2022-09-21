import PropTypes from "prop-types";
import { connect } from "react-redux";

import { countBooks } from "../../../redux/booksRedux.js";

const BooksSummary = ({ booksLength }) => {
  return (
    <section className="mt-4">
      <h3>Books summary..</h3>
      <p>There are {booksLength} books in the app</p>
    </section>
  );
};

const mapStateToProps = (state) => ({
  booksLength: countBooks(state),
});

BooksSummary.propTypes = {
  books: PropTypes.number,
};

export default connect(mapStateToProps)(BooksSummary);
