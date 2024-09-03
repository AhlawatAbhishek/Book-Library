import React, { useContext, useEffect } from "react";
import { BooksContext } from "../context/BooksContext";
import { useParams } from "react-router-dom";
export default function BookDetails() {
  const { bookId } = useParams();
  const { books } = useContext(BooksContext);
  const book = books.find((book) => book.id === parseInt(bookId));
  useEffect(() => {
    console.log(book);
  });

  return (
    <div>
      <h1>Book Details</h1>
      <p>Book ID: {bookId}</p>
    </div>
  );
}
