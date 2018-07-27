import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookList = ({ books, updateShelf }) => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      { books.map(book => {
        return (<li key={ book.id }>
          <Book book={ book } updateShelf={ updateShelf } />
        </li>)
      })}
    </ol>
  </div>
)

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default BookList;
