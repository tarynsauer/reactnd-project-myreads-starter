import React from 'react'
import ShelfChanger from './ShelfChanger'

const Book = ({ book, updateShelf }) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
      <ShelfChanger book={ book } currentlySelected={ book.shelf } updateShelf={ updateShelf } />
    </div>
    <div className="book-title">{ book.title }</div>
    <div className="book-authors">{ book.authors }</div>
  </div>
)

export default Book;
