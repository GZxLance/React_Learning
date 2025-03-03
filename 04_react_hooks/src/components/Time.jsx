import { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    // 设置一个每秒执行一次的定时器
    const intervalId = setInterval(() => {
      // 每秒更新一次时间
      setCurrentTime(new Date());
    }, 1000);

    // 组件卸载时清除定时器，避免内存泄漏
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      {/* 显示格式化后的时间 */}
      <p>{formatTime(currentTime)}</p>
    </div>
  );
};

export default Time;
