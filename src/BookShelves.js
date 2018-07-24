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

  moveShelf = (oldBook, newShelf) => {
    var newBook = oldBook;
    var oldShelf = oldBook.shelf;
    newBook.shelf = newShelf;
    this.setState(prevState => ({
      [oldShelf]: prevState[oldShelf].filter((book) => book.id !== oldBook.id),
      [newShelf]: [...prevState[newShelf], newBook],
    }))
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf sectionTitle='Currently Reading' books={this.state.currentlyReading} moveShelf={this.moveShelf} />
          <BookShelf sectionTitle='Want to Read' books={this.state.wantToRead} moveShelf={this.moveShelf} />
          <BookShelf sectionTitle='Read' books={this.state.read} moveShelf={this.moveShelf} />
        </div>
      </div>
    )
  }
}

export default BookShelves;
