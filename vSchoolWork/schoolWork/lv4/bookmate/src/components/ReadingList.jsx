// components/ReadingList.jsx
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContent";
import BookCard from "./Bookcard";

const ReadingList = () => {
  const { readingList } = useContext(BookContext);

  return (
    <div className="book-list">
      {readingList.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default ReadingList;
