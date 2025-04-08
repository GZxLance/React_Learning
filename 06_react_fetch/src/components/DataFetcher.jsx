// 导入必要的React钩子
import { useState, useEffect } from "react";

// 创建DataFetcher组件，用于获取和展示数据
const DataFetcher = () => {
  // 定义状态管理数据和加载状态
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用useEffect在组件挂载时获取数据
  useEffect(() => {
    // 定义异步数据获取函数
    const fetchData = async () => {
      try {
        // 发起GET请求获取数据
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        // 检查响应状态
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 解析JSON响应
        const data = await response.json();

        // 更新状态
        setPosts(data);
        setLoading(false);
      } catch (err) {
        // 错误处理
        setError(err.message);
        setLoading(false);
      }
    };

    // 调用获取数据函数
    fetchData();
  }, []); // 空依赖数组表示仅在组件挂载时执行

  // 渲染加载状态
  if (loading) {
    return <div>Loading...</div>;
  }

  // 渲染错误状态
  if (error) {
    return <div>Error: {error}</div>;
  }

  // 渲染数据
  return (
    <div>
      <h2>Posts</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{ border: "1px solid #ddd", padding: "1rem" }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
