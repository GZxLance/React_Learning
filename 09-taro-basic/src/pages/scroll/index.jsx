import { useState } from "react";
import { View, Text, ScrollView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const ScrollPage = () => {
  const [list, setList] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // 模拟加载数据的延迟
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 下拉刷新
  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await sleep(1000);
      setList(Array.from({ length: 20 }, (_, i) => i + 1));
      Taro.showToast({ title: "刷新成功", icon: "success" });
    } catch (error) {
      Taro.showToast({ title: "刷新失败", icon: "error" });
    } finally {
      setRefreshing(false);
    }
  };

  // 上拉加载更多
  const handleLoadMore = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await sleep(1000);
      const newItems = Array.from(
        { length: 10 },
        (_, i) => list.length + i + 1
      );
      setList([...list, ...newItems]);
    } catch (error) {
      Taro.showToast({ title: "加载失败", icon: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="scroll-page">
      <ScrollView
        className="scroll-list"
        scrollY
        refresherEnabled
        refresherTriggered={refreshing}
        onRefresherRefresh={handleRefresh}
        onScrollToLower={handleLoadMore}
      >
        {list.map((item) => (
          <View key={item} className="list-item">
            <Text className="item-text">列表项 {item}</Text>
          </View>
        ))}
        {loading && (
          <View className="loading">
            <Text>加载中...</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ScrollPage;
