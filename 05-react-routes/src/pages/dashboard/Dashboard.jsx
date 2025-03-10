import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../app.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <nav className="dashboard-nav">
        <h2>仪表盘导航 :</h2>
        <NavLink to="profile" activeClassName="active">
          个人中心
        </NavLink>
        <NavLink to="setting" activeClassName="active">
          设置
        </NavLink>
      </nav>
      <div className="hello">
        <h3>欢迎你！ 用户✨✨{user?.username}✨✨</h3>
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;
