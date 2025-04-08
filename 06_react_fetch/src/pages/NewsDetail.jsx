import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsDetail } from "../api/request3";

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await getNewsDetail(id);
        if (
          response.code === 200 &&
          response.result &&
          response.result.list.length > 0
        ) {
          setNews(response.result.list[0]);
        } else {
          setError(response.msg || "获取新闻详情失败");
        }
        setLoading(false);
      } catch (err) {
        setError("获取新闻详情失败");
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!news) return <div>No content available</div>;

  return (
    <div style={{ padding: "40px 20px" }}>
      <button
        onClick={() => navigate("/news")}
        style={{
          padding: "8px 16px",
          background: "#1890ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "30px",
        }}
      >
        返回列表
      </button>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#333" }}>{news.title}</h1>
        <div style={{ marginBottom: "20px", color: "#666" }}>
          作者：{news.source} | 发布日期：{news.ctime}
        </div>
        <img
          src={news.picUrl}
          alt={news.title}
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "30px",
          }}
        />
        <p
          style={{
            lineHeight: "1.8",
            color: "#444",
            fontSize: "16px",
            whiteSpace: "pre-wrap",
          }}
        >
          {news.description}
        </p>
      </div>
    </div>
  );
};

export default NewsDetail;
