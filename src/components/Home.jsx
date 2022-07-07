import { Link } from "react-router-dom";
import Shelf from "./Shelf";

function Home({ getAllBooks, change }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            section="Currently Reading"
            books={getAllBooks}
            category="currentlyReading"
            changeShelf={change}
          />
          <Shelf
            section="Want To Read"
            books={getAllBooks}
            category="wantToRead"
            changeShelf={change}
          />
          <Shelf
            section="Read"
            books={getAllBooks}
            category="read"
            changeShelf={change}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="open-search">
          Add a book
        </Link>
      </div>
    </div>
  );
}

export default Home;
