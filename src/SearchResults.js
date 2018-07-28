import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const SearchResults = ({ errorMessage, searchResults, updateShelf }) => {
  if (errorMessage.length > 0) {
    return (
      <div className="search-books-results">
        <p className="error-message">{errorMessage}</p>
      </div>
    )
  } else {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          { searchResults.map(book => {
            return (<li key={ book.id }>
              <Book book={ book } updateShelf={ updateShelf } />
            </li>)
          })}
        </ol>
      </div>
    )
  }
}

SearchResults.propTypes = {
  errorMessage: PropTypes.string,
  searchResults: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default SearchResults
