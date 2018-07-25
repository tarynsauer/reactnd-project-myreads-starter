import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchForm extends Component {
  state = {
    query: '',
    books: [],
  }

  handleQueryInput = (e) => {
    this.setState({query: e.target.value})
  }

  updateSearchResults = (books) => {
    if (Array.isArray(books)) {
      this.setState({books: books})
    } else {
      this.setState({books: []})
    }
  }

  handleSubmit = (e) => {
    if (e.key === 'Enter') {
      BooksAPI.search(this.state.query).then((books) =>
        this.updateSearchResults(books)
      ).catch(() =>
        this.setState({books: []})
      )
    }
  }

  render() {
    return (
      <div>
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query}
              onKeyPress={this.handleSubmit} onChange={this.handleQueryInput} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => {
              return (<li key={book.id}>
                <Book book={book} moveShelf={this.props.moveShelf} />
              </li>)
            })}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchForm
