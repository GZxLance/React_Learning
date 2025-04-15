import React, { useState } from "react";
import { View, Button, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const ScanCode = () => {
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    try {
      const res = await Taro.scanCode();
      setScanResult(res);
      Taro.showToast({
        title: "扫码成功",
        icon: "success",
      });
    } catch (err) {
      console.error("扫码失败:", err);
      Taro.showToast({
        title: "扫码失败: " + (err.errMsg || err.message),
        icon: "none",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="scan_code">
      <Button
        className="scan-btn"
        onClick={handleScan}
        loading={loading}
        disabled={loading}
      >
        {loading ? "扫码中..." : "开始扫码"}
      </Button>

      {scanResult && (
        <View className="result-container">
          <Text className="result-title">扫码结果：</Text>
          <View className="result-item">
            <Text className="label">结果：</Text>
            <Text className="value">{scanResult.result}</Text>
          </View>
          <View className="result-item">
            <Text className="label">类型：</Text>
            <Text className="value">{scanResult.scanType}</Text>
          </View>
          <View className="result-item">
            <Text className="label">字符集：</Text>
            <Text className="value">{scanResult.charSet}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ScanCode;
