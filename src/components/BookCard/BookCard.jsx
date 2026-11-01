import "./BookCard.css";

function BookCard({ title, author, price, image, category }) {
    return(
        <div className="book-card">
            <div className="book-cover">
              <span className="book-category">{category}</span>
               <button className="favorite-button">♡</button>
               <img src={image} alt={title} />
            </div>

            <div className="book-details">
            <h2>{title}</h2>
            <p>by {author}</p>

            <div className="book-footer">
            <span className="book-price">₹{price}</span>
            <button className="arrow-button">➜</button>
        </div>
      </div>
    </div>
    );
}

export default BookCard;