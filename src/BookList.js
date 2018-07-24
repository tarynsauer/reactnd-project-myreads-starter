import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map((book) => {
            return (<li key={book.id}>
              <Book cover={book.imageLinks.thumbnail} title={book.title} authors={book.authors} />
            </li>)
          })}
        </ol>
      </div>
    )
  }
}

export default BookList;
