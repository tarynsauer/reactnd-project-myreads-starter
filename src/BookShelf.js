import React from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'

const BookShelf = ({ books, sectionTitle, moveShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ sectionTitle }</h2>
    <BookList books={ books } moveShelf={ moveShelf } />
  </div>
)

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  moveShelf: PropTypes.func.isRequired,
  sectionTitle: PropTypes.string.isRequired,
}

export default BookShelf;
