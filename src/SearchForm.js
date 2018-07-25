import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'

class SearchForm extends Component {
  state = {
    query: '',
    searchResults: [],
  }

  handleQueryInput = (e) => {
    this.setState({query: e.target.value})
  }

  setBookShelf = (results) => {
    results.map((result) => {
      var books = this.props.books.filter(book => book.id === result.id)
      if (books.length > 0) {
        result.shelf = books[0].shelf
        return result
      } else {
        result.shelf = 'none'
        return result
      }
    })
    return results
  }

  updateSearchResults = (results) => {
    if (Array.isArray(results)) {
      var resultsWithShelves = this.setBookShelf(results)
      this.setState({searchResults: resultsWithShelves})
    } else {
      this.setState({searchResults: []})
    }
  }

  handleSubmit = (e) => {
    if (e.key === 'Enter') {
      BooksAPI.search(this.state.query).then((results) =>
        this.updateSearchResults(results)
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
        <SearchResults searchResults={this.state.searchResults} updateShelf={this.props.addToShelf} />
      </div>
    )
  }
}

SearchForm.propTypes = {
  books: PropTypes.array.isRequired,
  addToShelf: PropTypes.func.isRequired,
}

export default SearchForm
