import React, { Component } from 'react'
import Book from './Book'

class SearchResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.searchResults.map((book) => {
            return (<li key={book.id}>
              <Book book={book} updateShelf={this.props.updateShelf} />
            </li>)
          })}
        </ol>
      </div>
    )
  }
}

export default SearchResults
