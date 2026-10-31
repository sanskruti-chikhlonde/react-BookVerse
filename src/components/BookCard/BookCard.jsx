import "./BookCard.css";

function BookCard({ title, author, price, image}) {
    return(
        <div className="book-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{price}</p>
        </div>
    );
}

export default BookCard;