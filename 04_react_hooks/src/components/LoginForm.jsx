import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="id"
        style={{
          margin: "10px 0",
          padding: "12px",
          width: "100%",
          border: "1px solid #A7C9AB", // 浅莫兰迪绿
          borderRadius: "8px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="密码"
        style={{
          margin: "10px 0",
          padding: "12px",
          width: "100%",
          border: "1px solid #A7C9AB", // 浅莫兰迪绿
          borderRadius: "8px",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "12px 24px",
          backgroundColor: "#8DB69B", // 中莫兰迪绿
          color: "#FFFFFF",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
          width: "100%",
          transition: "background-color 0.3s ease",
        }}
      >
        登录
      </button>
    </form>
  );
};

export default LoginForm;
