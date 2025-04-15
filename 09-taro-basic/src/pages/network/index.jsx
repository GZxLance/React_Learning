import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { AtCard } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const Network = () => {
  const [networkType, setNetworkType] = useState("");
  const [isConnected, setIsConnected] = useState(true);

  // 获取网络状态
  const getNetworkInfo = async () => {
    try {
      // 获取网络类型
      const networkRes = await Taro.getNetworkType();
      setNetworkType(networkRes.networkType.toUpperCase());
    } catch (error) {
      console.error("获取网络信息失败:", error);
    }
  };

  useEffect(() => {
    // 初始获取网络信息
    getNetworkInfo();

    // 监听网络状态变化
    Taro.onNetworkStatusChange((res) => {
      setNetworkType(res.networkType.toUpperCase());
      setIsConnected(res.isConnected);
      // 网络状态变化时重新获取IP
      if (res.isConnected) {
        getNetworkInfo();
      }
    });

    return () => {
      // 组件卸载时取消监听
      Taro.offNetworkStatusChange();
    };
  }, []);

  return (
    <View className="network">
      <AtCard title="网络状态监测">
        <View className="info-item">
          <Text className="label">网络类型：</Text>
          <Text className="value">{networkType || "获取中..."}</Text>
        </View>
        <View className="info-item">
          <Text className="label">网络状态：</Text>
          <Text
            className={`value ${isConnected ? "connected" : "disconnected"}`}
          >
            {isConnected ? "已连接" : "未连接"}
          </Text>
        </View>
      </AtCard>
    </View>
  );
};

export default Network;
