// src/components/BookInput.js
import React, { useState, useEffect } from "react";

const BookInput = ({ onAddBook, onEditBook, editBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editBook) {
      setTitle(editBook.title);
      setAuthor(editBook.author);
      setYear(editBook.year);
      setContent(editBook.content);
    }
  }, [editBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, year, content };
    if (editBook) {
      onEditBook({ ...editBook, ...book });
    } else {
      onAddBook(book);
    }
    setTitle("");
    setAuthor("");
    setYear("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editBook ? "编辑图书🔧" : "添加图书💡"}</h2>
      <input
        type="text"
        placeholder="请输入书名"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="请输入作者"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="请输入出版年份"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="请输入简介"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{editBook ? "保存编辑" : "添加图书"}</button>
    </form>
  );
};

export default BookInput;
