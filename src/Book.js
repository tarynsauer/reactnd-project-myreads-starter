import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  render() {
    const { authors, shelf, title } = this.props.book;
    const cover = this.props.book.imageLinks.thumbnail;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${cover}")` }}></div>
          <ShelfChanger book={this.props.book} currentlySelected={shelf} updateShelf={this.props.updateShelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

export default Book;
