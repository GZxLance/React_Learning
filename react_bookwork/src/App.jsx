// src/App.js
import React, { useState } from "react";
import "./App.css";
import BookInput from "./components/BookInput";
import BookList from "./components/BookList";
import Card from "./components/Card";

const App = () => {
  const [books, setBooks] = useState([]);
  const [editBook, setEditBook] = useState(null);

  // 添加图书
  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  // 编辑图书
  const handleEditBook = (updatedBook) => {
    console.log("Editing book clicked:", editBook);
    console.log("Updated book:", updatedBook);
    setBooks(
      books.map((book) => (book.title === editBook.title ? updatedBook : book))
    );
    setEditBook(null); // 编辑完成后清空编辑状态
  };

  // 查看图书详情
  const handleSelectBook = (book) => {
    setBooks(
      books.map((b) =>
        b.title === book.title
          ? { ...b, selected: true }
          : { ...b, selected: false }
      )
    );
  };

  // 删除图书
  const handleDeleteBook = (book) => {
    setBooks(books.filter((b) => b.title !== book.title));
  };

  // 触发编辑操作
  const handleEditClick = (book) => {
    setEditBook(book);
  };

  return (
    <div className="app-container">
      <Card
        header={<h1>图书管理系统📚✏️</h1>}
        body={
          <>
            <BookInput
              onAddBook={handleAddBook}
              onEditBook={handleEditBook}
              editBook={editBook}
            />
            <BookList
              books={books}
              onEdit={handleEditClick}
              onSelect={handleSelectBook}
              onDelete={handleDeleteBook}
            />
          </>
        }
        footer={<p> 哎呀，已经到底了。</p>}
      />
    </div>
  );
};

export default App;
