import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("Nanjing"); // 当前输入的城市，默认为南京
  const [weather, setWeather] = useState(null); // 存储从 API 获取的天气数据
  const [error, setError] = useState(""); // 存储错误信息
  const apiKey = "e3ce6dbd2cf47c39f1c9c9d973271fda"; // 替换为你的 API Key

  // 处理用户输入
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  // 点击搜索按钮时触发
  const handleSearch = async () => {
    if (!city.trim()) {
      setError("请输入一个有效的城市名称");
      setWeather(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("无法找到该城市，请检查输入是否正确");
      }

      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (error) {
      console.error(error);
      setError(error.message);
      setWeather(null); // 清空天气数据以避免显示旧数据
    }
  };

  return (
    <div className="weather-container">
      {/* 搜索框 */}
      <div className="search-container">
        <input
          type="text"
          placeholder="请输入城市名称"
          value={city}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          搜索
        </button>
      </div>

      {/* 错误提示 */}
      {error && <p className="error-message">{error}</p>}

      {/* 天气信息展示 */}
      {weather && (
        <div className="weather-info">
          <h2 className="city-name">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="temperature">温度: {weather.main.temp} °C</p>
          <p className="weather-description">
            天气状况: {weather.weather[0].description}
          </p>
          <p className="humidity">湿度: {weather.main.humidity}%</p>
          <p className="wind-speed">风速: {weather.wind.speed} m/s</p>
          <p className="pressure">气压: {weather.main.pressure} hPa</p>
          <p className="visibility">能见度: {weather.visibility / 1000} km</p>
          <p className="temp-min">最低温度: {weather.main.temp_min} °C</p>
          <p className="temp-max">最高温度: {weather.main.temp_max} °C</p>
          <p className="sunrise-time">
            日出时间:{" "}
            {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
          </p>
          <p className="sunset-time">
            日落时间: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
