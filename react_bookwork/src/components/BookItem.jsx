// src/components/BookItem.js
import React from "react";
import BookDetail from "./BookDetail";

const BookItem = ({ book, onEdit, onSelect, onDelete }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>作者：{book.author}</p>
      <button onClick={() => onSelect(book)}>详情</button>
      {book.selected && (
        <BookDetail book={book} onEdit={onEdit} onDelete={onDelete} />
      )}
    </div>
  );
};

export default BookItem;
