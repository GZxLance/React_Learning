import React from "react";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Component = () => {
  const gridData = [
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/baimao.png",
      value: "容器",
    },
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/buoumao.png",
      value: "基础内容",
    },
    {
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/gengduomaochong.png",
      value: "表单组件",
    },
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/jumao.png",
      value: "skyline",
    },
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/lanmao.png",
      value: "媒体组件",
    },
    {
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/nainiumao.png",
      value: "地图",
    },
    {
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/sanhuamao.png",
      value: "定位",
    },
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/heimao.png",
      value: "刷新与加载",
    },
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/wumaomao.png",
      value: "可移动视图",
    },
    {
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/xianluomao.png",
      value: "WebView",
    },
  ];

  const handleClick = (item, index) => {
    const pages = [
      "/pages/container/index",
      "/pages/basic/index",
      "/pages/form/index",
      "/pages/skyline/index",
      "/pages/media/index",
      "/pages/map/index",
      "/pages/location/index",
      "/pages/scroll/index",
      "/pages/movable/index",
      "/pages/webView/index",
    ];
    Taro.navigateTo({
      url: pages[index],
    });
  };

  return (
    <View className="component-container">
      <View
        style={{ margin: "10px", backgroundColor: "#fff", borderRadius: "8px" }}
      >
        <AtGrid data={gridData} onClick={handleClick} />
      </View>
    </View>
  );
};

export default Component;
