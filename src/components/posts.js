// components/BookSearch.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function BookSearch() {
  const [bookTitle, setBookTitle] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isSearching) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`)
        .then((response) => setSearchResult(response.data.items))
        .finally(() => setIsSearching(false));
    }
  }, [bookTitle, isSearching]);

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleDelete = () => {
    setSearchResult([]);
    setBookTitle("");
  };

  return (
    <div>
      <form className="search-form">
        <label className="label">Judul Buku:</label>
        <input
          className="input-field"
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        <div className="buttons">
          <button className="button" type="button" onClick={handleSearch}>
            Cari
          </button>
          <button
            className="button delete-button"
            type="button"
            onClick={handleDelete}
          >
            Hapus
          </button>
        </div>
      </form>
      {isSearching && <p>Mencari...</p>}
      <ul className="books">
        {searchResult.map((book) => (
          <li className="book" key={book.id}>
            <div>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || ""}
                alt={book.volumeInfo.title}
              />
              <div className="book-info">
                <p>{book.volumeInfo.title}</p>
                <p>{book.volumeInfo.authors?.join(", ")}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;
