import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookShelves extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf sectionTitle='Currently Reading' />
          <BookShelf sectionTitle='Want to Read' />
          <BookShelf sectionTitle='Read' />
        </div>
      </div>
    )
  }
}

export default BookShelves;
