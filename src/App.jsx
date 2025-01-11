import "./App.css";
import books from "./books.json";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Book Library</h1>
      </header>
      <main className="book-list-container">
        <ul className="book-list">
          {books.map((book) => (
            <li key={book.id} className="book-item">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-year">Published: {book.year}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
