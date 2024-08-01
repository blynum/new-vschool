// components/BookDetail.jsx
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContent";

const BookDetail = ({ book }) => {
  const { readingList, setReadingList } = useContext(BookContext);

  const addToReadingList = () => {
    setReadingList([...readingList, book]);
  };

  return (
    <div>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />
      <h1>{book.volumeInfo.title}</h1>
      <h2>{book.volumeInfo.authors?.join(", ")}</h2>
      <p>{book.volumeInfo.description}</p>
      <button onClick={addToReadingList}>Add to Reading List</button>
    </div>
  );
};

export default BookDetail;
