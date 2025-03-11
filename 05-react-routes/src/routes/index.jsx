import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/Fans";
import Follow from "../pages/dashboard/Follow";
import Login from "../pages/Login";
import Book from "../pages/Book";
import NavBar from "../components/NavBar";
import BlogList from "../components/BlogList";
import BlogDetails from "../components/BlogDetails";
import Content from "../pages/Content"; // 新增导入
import Layout from "../pages/Layout";

const AppRoutes = () => {
  // const location = useLocation();
  // const isLoginPage = location.pathname === "/login";
  // const user = JSON.parse(localStorage.getItem("user"));

  // if (!user && !isLoginPage) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return (
    <>
      {/* {!isLoginPage && <NavBar />} */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Layout />}>
          <Route path="/" element={<BlogList />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:bookId" element={<Book />} />
          <Route path="/blog/:blogIndex" element={<BlogDetails />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />}>
              <Route index element={<Content />} />
              <Route path="content" element={<Content />} /> {/* 新增路由 */}
              <Route path="fans" element={<Fans />} />
              <Route path="follow" element={<Follow />} />
            </Route>
            <Route path="setting" element={<Setting />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
