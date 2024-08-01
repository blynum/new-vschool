// pages/LandingPage.jsx
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import axios from "axios";

const LandingPage = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = (query) => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <SearchResults books={books} />
    </div>
  );
};

export default LandingPage;
