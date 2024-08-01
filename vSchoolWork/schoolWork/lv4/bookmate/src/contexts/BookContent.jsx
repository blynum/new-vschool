// contexts/BookContext.jsx
import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readingList, setReadingList] = useState([]);

  return (
    <BookContext.Provider value={{ readingList, setReadingList }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
