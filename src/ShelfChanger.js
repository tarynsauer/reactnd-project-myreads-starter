import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {
  handleChange = (e) => {
    var newShelf = e.target.value
    var book = this.props.book
    BooksAPI.update(book, newShelf).then(() =>
      this.props.moveShelf(book, newShelf)
    )
  }

  render() {
    const options = {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want to Read',
      read: 'Read',
      none: 'None',
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} defaultValue={this.props.currentlySelected}>
          <option value="move" disabled>Move to...</option>
          {Object.keys(options).map((shelfId) => {
            return <option key={shelfId} value={shelfId}>{options[shelfId]}</option>
          })}
        </select>
      </div>
    )
  }
}

export default ShelfChanger;
