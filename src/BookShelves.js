import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookShelves extends Component {
  booksByShelf = (shelf) => {
    return this.props.books.filter((book) => book.shelf === shelf)
  }

  render() {
    const shelves = [
      {
        sectionTitle: 'Currently Reading',
        books: this.booksByShelf('currentlyReading'),
      },
      {
        sectionTitle: 'Want to Read',
        books: this.booksByShelf('wantToRead'),
      },
      {
        sectionTitle: 'Read',
        books: this.booksByShelf('read'),
      },
    ]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => {
            return <BookShelf key={shelf.sectionTitle} sectionTitle={shelf.sectionTitle} books={shelf.books} moveShelf={this.props.moveShelf} />
          })}
        </div>
      </div>
    )
  }
}

export default BookShelves;
