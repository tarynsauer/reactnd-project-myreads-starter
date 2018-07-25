import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const SearchResults = ({ searchResults, updateShelf }) => (
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

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default SearchResults
