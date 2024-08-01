// components/SearchResults.jsx
import React from "react";
import BookCard from "./Bookcard";

const SearchResults = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default SearchResults;
