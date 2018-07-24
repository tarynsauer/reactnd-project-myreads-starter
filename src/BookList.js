import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map((book) => {
            return (<li key={book.id}>
              <Book book={book} moveShelf={this.props.moveShelf} />
            </li>)
          })}
        </ol>
      </div>
    )
  }
}

export default BookList;
