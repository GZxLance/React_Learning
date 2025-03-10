import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import "../app.css";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <nav>
      <NavLink to="/" activeClassName="active" exact>
        博客首页
      </NavLink>
      <NavLink to="/about?name=Lance&age=30" activeClassName="active">
        关于
      </NavLink>
      <NavLink to="/dashboard" activeClassName="active">
        仪表盘
      </NavLink>
      <NavLink to="/book/456" activeClassName="active">
        Book
      </NavLink>
      <NavLink to="/login" activeClassName="active">
        退出登录
      </NavLink>
      <div className="avatar z">
        <div>hi~{user.username}</div>
        {user.avatar && <Avatar src={user.avatar} style={{ width: 32 }} />}
      </div>
    </nav>
  );
};

export default NavBar;
