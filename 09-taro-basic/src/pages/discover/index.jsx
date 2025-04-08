import React from "react";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Discover = () => {
  const gridData = [
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/jumao.png",
      value: "记账本",
    },
    {
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/sanhuamao.png",
      value: "音乐盒子",
    },
    {
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/xianluomao.png",
      value: "个人名片",
    },
  ];

  const handleClick = (item, index) => {
    const pages = [
      "/pages/account-book/index",
      "/pages/music/index",
      "/pages/namecard/index",
    ];
    Taro.navigateTo({
      url: pages[index],
    });
  };

  return (
    <View className="discover-container">
      <View
        style={{ margin: "10px", backgroundColor: "#fff", borderRadius: "8px" }}
      >
        <AtGrid data={gridData} onClick={handleClick} />
      </View>
    </View>
  );
};

export default Discover;
