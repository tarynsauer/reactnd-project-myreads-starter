import React, { Component } from 'react'
import BookList from './BookList'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.sectionTitle}</h2>
        <BookList />
      </div>
    )
  }
}

export default BookShelf;
