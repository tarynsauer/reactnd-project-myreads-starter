import React, { Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class BookShelves extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState({
        currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
        wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
        read: books.filter((book) => book.shelf === 'read'),
      })
    )
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf sectionTitle='Currently Reading' books={this.state.currentlyReading} />
          <BookShelf sectionTitle='Want to Read' books={this.state.wantToRead} />
          <BookShelf sectionTitle='Read' books={this.state.read} />
        </div>
      </div>
    )
  }
}

export default BookShelves;
