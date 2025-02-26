// src/components/BookDetail.js
import React from "react";

const BookDetail = ({ book, onEdit, onDelete }) => {
  if (!book) {
    return null;
  }
  return (
    <div className="book-detail">
      <h2>图书详情</h2>
      <p>书名：{book.title}</p>
      <p>作者：{book.author}</p>
      <p>出版年份：{book.year}</p>
      <p>简介：{book.content}</p>
      <button onClick={() => onEdit(book)}>编辑</button>
      <button onClick={() => onDelete(book)}>删除</button>
    </div>
  );
};

export default BookDetail;
