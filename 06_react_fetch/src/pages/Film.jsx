import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFilmList } from "../api/request2";

const Film = () => {
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchFilms();
  }, [currentPage]);

  const fetchFilms = async () => {
    try {
      const response = await getFilmList(currentPage);
      if (response.code === 200 && response.result) {
        setFilms(response.result.newslist);
        setTotalPages(Math.ceil(response.result.allnum / 10));
      } else {
        setError(response.msg);
      }
      setLoading(false);
    } catch (err) {
      setError("获取影视资讯失败");
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>影视资讯</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          padding: "20px",
        }}
      >
        {films.map((film) => (
          <div
            key={film.id}
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
            onClick={() => navigate(`/film/${film.id}`)}
          >
            <img
              src={film.picUrl}
              alt={film.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "18px",
                color: "#333",
              }}
            >
              {film.title}
            </h3>
            <p
              style={{
                margin: "0 0 10px 0",
                color: "#666",
                fontSize: "14px",
              }}
            >
              作者：{film.source} | 发布日期：{film.ctime}
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
              {film.description}
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

export default Film;
