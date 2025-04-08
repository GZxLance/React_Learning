import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import Film from "../pages/Film";
import FilmDetail from "../pages/FilmDetail";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="/film" element={<Film />} />
      <Route path="/film/:id" element={<FilmDetail />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetail />} />
    </Routes>
  );
};

export default AppRoutes;
