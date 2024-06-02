import "./App.css";
import React from "react";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";

const App = () => {
  return (
    <div>
      <h1>Book Tracker</h1>
      <AddBookForm />
      <BookList />
    </div>
  );
};

export default App;
