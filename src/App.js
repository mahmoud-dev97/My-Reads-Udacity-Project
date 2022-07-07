import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import Home from "./components/Home";
import { getAll, update } from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  // get all data for the user
  useEffect(() => {
    getAll().then((res) => {
      setBooks(res);
    });
  }, []);
  // change Shelf book function
  const changeShelf = async (book, shelf) => {
    await update(book, shelf);
    await getAll().then((res) => {
      setBooks(res);
    });
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" element={<Search getAllBooks={books} change={changeShelf} />} />
          <Route
            index
            element={<Home getAllBooks={books} change={changeShelf} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
