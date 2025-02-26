// src/components/BookList.js
import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, onEdit, onSelect, onDelete }) => {
  return (
    <div className="book-list">
      <h2>图书列表📃</h2>
      {books.length === 0 ? (
        <p>👀当前图书列表为空。</p>
      ) : (
        books.map((book) => (
          <BookItem
            key={book.title}
            book={book}
            onEdit={onEdit}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default BookList;
