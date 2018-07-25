import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookShelves extends Component {

  render() {
    const currentlyReading = this.props.books.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = this.props.books.filter((book) => book.shelf === 'wantToRead')
    const read = this.props.books.filter((book) => book.shelf === 'read')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf sectionTitle='Currently Reading' books={currentlyReading} moveShelf={this.props.moveShelf} />
          <BookShelf sectionTitle='Want to Read' books={wantToRead} moveShelf={this.props.moveShelf} />
          <BookShelf sectionTitle='Read' books={read} moveShelf={this.props.moveShelf} />
        </div>
      </div>
    )
  }
}

export default BookShelves;
