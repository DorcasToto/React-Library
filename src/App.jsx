import { useState } from "react";
import "./App.css";
import books from "./books.json";

function App() {
  return (
    <>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} ({book.year})
          </li>
        ))}
      </ul>{" "}
    </>
  );
}

export default App;
