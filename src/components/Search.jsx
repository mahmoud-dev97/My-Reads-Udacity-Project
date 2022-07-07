import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";
function Search({ change, getAllBooks }) {
  // state value
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Search
  useEffect(() => {
    if (query === "") return setData([]);
    search(query).then(async (res) => {
      if (res.error) {
        setData([]);
        setLoading(false);
      } else {
        setData(await res);
        setLoading(true);
        res.map((element) => {
          return getAllBooks.forEach((item) => {
            element.id === item.id && (element.shelf = item.shelf);
          });
        });
      }
    });
  }, [getAllBooks, query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {loading ? (
            data.map((book) => (
              <Book key={book.id} book={book} changeShelf={change} />
            ))
          ) : (
            <h1>No Match Book</h1>
          )}
        </ol>
      </div>
    </div>
  );
}

export default Search;
