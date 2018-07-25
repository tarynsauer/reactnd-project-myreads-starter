import React from 'react'
import BookList from './BookList'

const BookShelf = ({ books, sectionTitle, moveShelf }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{ sectionTitle }</h2>
    <BookList books={ books } moveShelf={ moveShelf } />
  </div>
)

export default BookShelf;
