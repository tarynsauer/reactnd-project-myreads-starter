import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class ShelfChanger extends Component {
  handleChange = (e) => {
    const newShelf = e.target.value
    const book = this.props.book
    BooksAPI.update(book, newShelf).then(() =>
      this.props.updateShelf(book, newShelf)
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
        <select onChange={ this.handleChange } defaultValue={ this.props.currentlySelected }>
          <option value="move" disabled>Move to...</option>
          {Object.keys(options).map(shelfId => {
            return <option key={ shelfId } value={ shelfId }>{ options[shelfId] }</option>
          })}
        </select>
      </div>
    )
  }
}

ShelfChanger.propTypes = {
  currentlySelected: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired,
}

export default ShelfChanger;
