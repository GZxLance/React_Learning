import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LogoutButton = () => {
  const { logout, getUser } = useContext(UserContext);
  const currentUser = getUser();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // 改为垂直布局
        alignItems: "center", // 居中对齐
        marginTop: "20px",
        width: "100%",
      }}
    >
      {/* 当前用户登录的文本 */}
      {currentUser && (
        <h2
          style={{
            color: "#5E8B7E", // 深莫兰迪绿
            fontSize: "24px", // 字体更大
            fontWeight: "bold",
            marginBottom: "20px", // 与下方按钮保持间距
          }}
        >
          当前用户: {currentUser}
        </h2>
      )}

      {/* 登出按钮 */}
      <button
        onClick={logout}
        style={{
          padding: "12px 24px",
          backgroundColor: "#8DB69B", // 中莫兰迪绿
          color: "#FFFFFF",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          width: "100%", // 宽度占满
          transition: "background-color 0.3s ease",
        }}
      >
        退出
      </button>
    </div>
  );
};

export default LogoutButton;
