import { useState } from "react";
import { View, Text, Button, Input } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

const Clipboard = () => {
  const [clipboardData, setClipboardData] = useState("");
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  // 读取剪贴板
  const getClipboardData = async () => {
    setLoading(true);
    try {
      const res = await Taro.getClipboardData();
      setClipboardData(res.data);
      Taro.showToast({
        title: "读取成功",
        icon: "success",
      });
    } catch (err) {
      console.error("读取剪贴板失败:", err);
      Taro.showToast({
        title: "读取失败: " + (err.errMsg || err.message),
        icon: "none",
      });
    } finally {
      setLoading(false);
    }
  };

  // 写入剪贴板
  const addClipboardData = async () => {
    if (!inputText.trim()) {
      Taro.showToast({
        title: "请输入要复制的内容",
        icon: "none",
      });
      return;
    }

    setLoading(true);
    try {
      await Taro.setClipboardData({
        data: inputText,
      });
      Taro.showToast({
        title: "复制成功",
        icon: "success",
      });
    } catch (err) {
      console.error("写入剪贴板失败:", err);
      Taro.showToast({
        title: "复制失败: " + (err.errMsg || err.message),
        icon: "none",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="clipboard-page">
      <View className="content">
        <View className="input-section">
          <Text className="section-title">写入剪贴板</Text>
          <Input
            className="input-field"
            value={inputText}
            onInput={(e) => setInputText(e.detail.value)}
            placeholder="请输入要复制的内容"
          />
          <Button
            className="action-btn"
            onClick={addClipboardData}
            loading={loading}
            disabled={loading}
          >
            复制到剪贴板
          </Button>
        </View>

        <View className="display-section">
          <Text className="section-title">剪贴板内容</Text>
          <View className="clipboard-content">
            {clipboardData ? (
              <Text className="content-text">{clipboardData}</Text>
            ) : (
              <Text className="placeholder-text">读取剪贴板内容</Text>
            )}
          </View>
          <Button
            className="action-btn"
            onClick={getClipboardData}
            loading={loading}
            disabled={loading}
          >
            读取剪贴板
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Clipboard;
