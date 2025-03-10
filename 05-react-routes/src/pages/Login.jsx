import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import b01 from "../assets/b01.png";
import b02 from "../assets/b02.png";
import "../app.css";

const users = [
  {
    username: "lance",
    password: "lance",
    avatar: b01,
    age: 30,
    bio: "人生如逆旅，我亦是行人。",
    followers: 100,
    following: 50,
  },
  {
    username: "laure",
    password: "laure",
    avatar: b02,
    age: 119,
    bio: "莫听穿林打叶声，何妨吟啸且徐行。",
    followers: 100,
    following: 50,
  },
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>登录</h2>
        <input
          type="text"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default Login;
