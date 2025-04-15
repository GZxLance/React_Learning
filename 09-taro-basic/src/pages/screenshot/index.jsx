import React, { useEffect } from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Screenshot = () => {
  useEffect(() => {
    const onScreenCapture = () => {
      Taro.showToast({
        title: "您刚刚截屏了！",
        icon: "success",
        duration: 2000,
      });
    };

    Taro.onUserCaptureScreen(onScreenCapture);

    return () => {
      Taro.offUserCaptureScreen(onScreenCapture);
    };
  }, []);

  return (
    <View className="screenshot">
      <View className="content">
        <Text>进行截屏操作时</Text>
        <Text>会收到一条提示消息</Text>
      </View>
    </View>
  );
};

export default Screenshot;
