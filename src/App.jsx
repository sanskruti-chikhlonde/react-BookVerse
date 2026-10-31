import BookCard from "./components/BookCard/BookCard.jsx";

import "./components/BookCard/BookCard";

function App() {
  return (
    <div className="app">
      <h1>BookVerse</h1>
      <p>A collection of stories worth exploring.</p>

      <BookCard
        title="Atomic Habits"
        author="James Clear"
        price={499}
        image="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
      />

    </div>
  );
}

export default App;