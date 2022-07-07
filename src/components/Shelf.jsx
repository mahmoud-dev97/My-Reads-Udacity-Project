import Book from "./Book";

function Shelf({ books, section, category, changeShelf }) {
  // filter data by category
  const categories = books.filter((book) => book.shelf === category);
  // bookData
  const bookData = categories.map((book) => (
    <Book key={book.id} book={book} changeShelf={changeShelf} />
  ));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{section}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{bookData}</ol>
      </div>
    </div>
  );
}

export default Shelf;
