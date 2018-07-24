import React, { Component } from 'react'
import './App.css'
import BookShelves from './BookShelves'
import SearchForm from './SearchForm'
import { Route, Link } from 'react-router-dom'

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="search-books">
            <BookShelves />
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )} />
        <Route path='/search' component={SearchForm} />
      </div>
    )
  }
}

export default BooksApp
