import React, { Component } from 'react'
import './App.css'
import BookShelves from './BookShelves'
import SearchForm from './SearchForm'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = { books: [] }

  moveShelf = (movedBook, newShelf) => {
    this.setState(prevState => ({
      books: prevState.books.map((book) =>
        movedBook.id === book.id ? Object.assign({}, book, { shelf: newShelf }) : book
      )}))
  }

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState({ books: books })
    )
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="search-books">
            <BookShelves books={this.state.books} moveShelf={this.moveShelf} />
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={() => (
          <SearchForm books={this.state.books} moveShelf={this.moveShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
