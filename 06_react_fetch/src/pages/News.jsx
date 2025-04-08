import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNewsList } from "../api/request3";

const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchNews();
  }, [currentPage]);

  const fetchNews = async () => {
    try {
      const response = await getNewsList(currentPage);
      if (response.code === 200 && response.result) {
        setNews(response.result.list);
        setTotalPages(Math.ceil(response.result.allnum / 10));
      } else {
        setError(response.msg);
      }
      setLoading(false);
    } catch (err) {
      setError("获取头条新闻失败");
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>每日头条</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          padding: "20px",
        }}
      >
        {news.map((item) => (
          <div
            key={item.id}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              ":hover": {
                transform: "translateY(-5px)",
              },
            }}
            onClick={() => navigate(`/news/${item.id}`)}
          >
            {item.picUrl && (
              <img
                src={item.picUrl}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />
            )}
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "18px",
                color: "#333",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                margin: "0 0 10px 0",
                color: "#666",
                fontSize: "14px",
              }}
            >
              作者：{item.source} | 发布日期：{item.ctime}
            </p>
            <p
              style={{
                margin: "0",
                color: "#444",
                fontSize: "14px",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{
            padding: "8px 16px",
            background: currentPage === 1 ? "#d9d9d9" : "#1890ff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
          }}
        >
          上一页
        </button>
        <span style={{ lineHeight: "32px" }}>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          style={{
            padding: "8px 16px",
            background: currentPage === totalPages ? "#d9d9d9" : "#1890ff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          }}
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default News;
