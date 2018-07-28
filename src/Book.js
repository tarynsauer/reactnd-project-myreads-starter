import React from 'react'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'

const Book = ({ book, updateShelf }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover"
        style={{ backgroundImage: book.imageLinks === undefined ? '' : `url("${book.imageLinks.thumbnail}")` }}>
      </div>
      <ShelfChanger book={ book } currentlySelected={ book.shelf } updateShelf={ updateShelf } />
    </div>
    <div className="book-title">{ book.title }</div>
    <div className="book-authors">{ book.authors }</div>
  </div>
)

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default Book;
