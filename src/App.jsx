import BookCard from "./components/BookCard/BookCard.jsx";
import books from "../data.json";

function App() {
  return (
    <div className="app">
      <h1>BookVerse</h1>
      <p>A collection of stories worth exploring.</p>

    <div className="book-grid">
      {books.map((book, index) => (
      <BookCard
        key={index}
        title={book.title}
        author={book.author}
        price={book.price}
        image={book.image}
      />
))}
    </div>
  </div>
);
}

export default App;