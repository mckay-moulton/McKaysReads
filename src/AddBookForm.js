import React, { useState } from "react";
import axios from "axios";

const AddBookForm = () => {
  const [book, setBook] = useState({
    Title: "",
    Author: "",
    Rating: "",
    ImageURL: "",
    DateFinished: "",
    YearPublished: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://523mz0vnj9.execute-api.us-east-1.amazonaws.com/prod/books",
        book,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(`Book added successfully! Book ID: ${response.data.BookID}`);
    } catch (error) {
      console.error("Error adding book:", error.response || error);
      alert("Failed to add book");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="Title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input
        name="Author"
        placeholder="Author"
        onChange={handleChange}
        required
      />
      <input
        name="Rating"
        placeholder="Rating"
        onChange={handleChange}
        required
      />
      <input name="ImageURL" placeholder="Image URL" onChange={handleChange} />
      <input
        name="DateFinished"
        placeholder="Date Finished"
        onChange={handleChange}
      />
      <input
        name="YearPublished"
        placeholder="Year Published"
        onChange={handleChange}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
