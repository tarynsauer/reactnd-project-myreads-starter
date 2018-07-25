import React from 'react'
import Book from './Book'

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

export default SearchResults
