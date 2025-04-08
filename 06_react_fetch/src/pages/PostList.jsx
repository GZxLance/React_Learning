import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get, del } from "../api/request";

const PostList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await get("/posts");
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setError("获取文章列表失败");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await del(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      setError("删除文章失败");
    }
  };

  if (loading) return <div>加载中...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>帖子列表</h1>
      <div style={{ display: "grid", gap: "20px", padding: "20px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px" }}>
                <h2 style={{ margin: "0 0 10px 0" }}>{post.title}</h2>
                <p style={{ margin: "0 0 10px 0", color: "#666" }}>
                  作者：{post.author} | 发布日期：{post.date}
                </p>
                <p style={{ margin: "0", color: "#444" }}>
                  {post.body.length > 100
                    ? `${post.body.slice(0, 100)}...`
                    : post.body}
                </p>
              </div>
            </div>
            <div style={{ padding: "0 15px 15px", textAlign: "right" }}>
              <button
                onClick={() => handleDelete(post.id)}
                style={{
                  background: "#ff4d4f",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                删除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
