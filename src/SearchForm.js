import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'

class SearchForm extends Component {
  state = {
    errorMessage: '',
    query: '',
    searchResults: [],
  }

  handleQueryInput = (e) => {
    this.setState({query: e.target.value})
  }

  setBookShelf = (results) => {
    results.map((result) => {
      const books = this.props.books.filter(book => book.id === result.id)
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
      const cleanResults = this.setBookShelf(results)
      this.setState({searchResults: cleanResults, errorMessage: ''})
    } else {
      this.setState({searchResults: [], errorMessage: ''})
    }
  }

  handleKeyUp = (e) => {
    const queryText = this.state.query
    if (queryText.length > 0) {
      BooksAPI.search(queryText).then((results) =>
        this.updateSearchResults(results)
      ).catch(() =>
        this.setState({errorMessage: 'Books not found.'})
      )
    } else {
      this.setState({searchResults: [], errorMessage: ''})
    }
  }

  render() {
    return (
      <div>
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query}
              onKeyUp={this.handleKeyUp} onChange={this.handleQueryInput} />
          </div>
        </div>
        <SearchResults errorMessage={this.state.errorMessage} searchResults={this.state.searchResults} updateShelf={this.props.updateShelf} />
      </div>
    )
  }
}

SearchForm.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default SearchForm
