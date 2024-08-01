// components/BookCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors?.join(", ")}</p>
      <Link to={`/book/${book.id}`}>More Details</Link>
    </div>
  );
};

export default BookCard;
