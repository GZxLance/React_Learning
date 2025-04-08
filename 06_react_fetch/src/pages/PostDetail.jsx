import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get, put } from "../api/request";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [editDate, setEditDate] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await get(`/posts/${id}`);
        setPost(data);
        setLoading(false);
      } catch (err) {
        setError("获取文章详情失败");
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div>加载中...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>文章不存在</div>;

  const handleEdit = () => {
    setEditTitle(post.title);
    setEditBody(post.body);
    setEditImage(post.image);
    setEditAuthor(post.author);
    setEditDate(post.date);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedPost = {
        title: editTitle,
        body: editBody,
        image: editImage,
        author: editAuthor,
        date: editDate,
      };
      await put(`/posts/${id}`, updatedPost);
      setPost({ ...post, ...updatedPost });
      setIsEditing(false);
    } catch (err) {
      setError("修改文章失败");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "8px 16px",
          marginBottom: "20px",
          background: "#1890ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        返回列表
      </button>
      <div>
        {isEditing ? (
          <div style={{ display: "grid", gap: "20px" }}>
            <div>
              <label htmlFor="title">标题：</label>
              <input
                type="text"
                id="title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>
            <div>
              <label htmlFor="image">图片URL：</label>
              <input
                type="text"
                id="image"
                value={editImage}
                onChange={(e) => setEditImage(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>
            <div>
              <label htmlFor="author">作者：</label>
              <input
                type="text"
                id="author"
                value={editAuthor}
                onChange={(e) => setEditAuthor(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>
            <div>
              <label htmlFor="date">日期：</label>
              <input
                type="text"
                id="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </div>
            <div>
              <label htmlFor="body">内容：</label>
              <textarea
                id="body"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                required
                style={{
                  width: "100%",
                  height: "200px",
                  padding: "8px",
                  marginTop: "5px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={handleSave}
                style={{
                  padding: "8px 16px",
                  background: "#52c41a",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                保存
              </button>
              <button
                onClick={() => setIsEditing(false)}
                style={{
                  padding: "8px 16px",
                  background: "#d9d9d9",
                  color: "rgba(0,0,0,0.65)",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                取消
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1 style={{ marginBottom: "20px" }}>{post.title}</h1>
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            />
            <div style={{ marginBottom: "20px", color: "#666" }}>
              作者：{post.author} | 发布日期：{post.date}
            </div>
            <p style={{ lineHeight: "1.8", color: "#333" }}>{post.body}</p>
            <button
              onClick={handleEdit}
              style={{
                marginTop: "20px",
                padding: "8px 16px",
                background: "#1890ff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              修改
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
