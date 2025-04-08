import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../api/request";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await post("/posts", {
        title,
        body,
        image,
        author,
        date: date || new Date().toISOString().split("T")[0],
      });
      navigate("/");
    } catch (err) {
      setError("创建文章失败");
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>新增帖子</h1>
      {error && (
        <div style={{ color: "#ff4d4f", marginBottom: "20px" }}>{error}</div>
      )}
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
        <div>
          <label htmlFor="title">标题：</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div>
          <label htmlFor="image">图片URL：</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div>
          <label htmlFor="author">作者：</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div>
          <label htmlFor="date">发布日期：</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>
        <div>
          <label htmlFor="body">内容：</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            style={{
              width: "100%",
              height: "200px",
              padding: "8px",
              marginTop: "5px",
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 24px",
            background: loading ? "#d9d9d9" : "#1890ff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            marginTop: "10px",
          }}
        >
          {loading ? "创建中..." : "创建文章"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
