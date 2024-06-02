import React, { useEffect, useState } from "react";
import axios from "axios";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("YOUR_API_GATEWAY_ENDPOINT/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.BookID}>
            <p>
              {book.Title} by {book.Author} - {book.Rating} stars
            </p>
            {book.ImageURL && (
              <img src={book.ImageURL} alt={book.Title} width="100" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
