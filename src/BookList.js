import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const BookList = ({ books, moveShelf }) => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      { books.map(book => {
        return (<li key={ book.id }>
          <Book book={ book } updateShelf={ moveShelf } />
        </li>)
      })}
    </ol>
  </div>
)

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  moveShelf: PropTypes.func.isRequired,
}

export default BookList;
