import React from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'

const BookShelf = ({ books, sectionTitle, updateShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ sectionTitle }</h2>
    <BookList books={ books } updateShelf={ updateShelf } />
  </div>
)

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  sectionTitle: PropTypes.string.isRequired,
}

export default BookShelf;
