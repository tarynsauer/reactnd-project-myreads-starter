import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
  render() {
    const books = [
      {
        id: '1',
        cover: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee',
      },
      {
        id: '2',
        cover: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        title: "Ender's Game",
        authors: 'Orson Scott Card',
      },
    ]

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (<li key={book.id}>
              <Book cover={book.cover} title={book.title} authors={book.authors} />
            </li>)
          })}
        </ol>
      </div>
    )
  }
}

export default BookList;
