import React from "react";
import "../../app.css";
import { Outlet, NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        {/* 左边竖向排列的导航 */}
        <nav className="profile-nav">
          <NavLink to="content" activeClassName="active">
            个人资料
          </NavLink>
          <NavLink to="fans" activeClassName="active">
            我的粉丝
          </NavLink>
          <NavLink to="follow" activeClassName="active">
            我的关注
          </NavLink>
        </nav>

        {/* 右边的内容区域 */}
        <div style={{ marginLeft: "20px", flexGrow: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
