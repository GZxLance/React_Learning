import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
        incidunt. Nisi, eaque, incidunt exercitationem ex magni aut amet
        recusandae reprehenderit accusamus debitis eum ratione, error dicta
        architecto possimus voluptatem consectetur.
      </h2>
      <button onClick={toggleTheme}>
        切换到 {isDarkMode ? "白天" : "黑暗"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;
