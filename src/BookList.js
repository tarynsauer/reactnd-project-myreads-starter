import React from 'react'
import Book from './Book'

const BookList = ({ books, moveShelf }) => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      { books.map( book => {
        return (<li key={ book.id }>
          <Book book={ book } updateShelf={ moveShelf } />
        </li>)
      })}
    </ol>
  </div>
)

export default BookList;
