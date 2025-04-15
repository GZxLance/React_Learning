import React from "react";
import { View } from "@tarojs/components";
import { AtGrid } from "taro-ui";
import Taro from "@tarojs/taro";
import "./index.scss";

const Api = () => {
  const gridData = [
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/jumao.png",
      value: "联系人",
    },
    {
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/sanhuamao.png",
      value: "设备",
    },
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/baimao.png",
      value: "截屏",
    },
    {
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/xianluomao.png",
      value: "蓝牙",
    },
    {
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/nainiumao.png",
      value: "剪贴板",
    },
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/wumaomao.png",
      value: "网络",
    },
    {
      image: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/buoumao.png",
      value: "扫码",
    },
  ];

  const handleClick = (item, index) => {
    const pages = [
      "/pages/contact/index",
      "/pages/device/index",
      "/pages/screenshot/index",
      "/pages/bluetooth/index",
      "/pages/clipboard/index",
      "/pages/network/index",
      "/pages/scanCode/index",
    ];
    Taro.navigateTo({
      url: pages[index],
    });
  };

  return (
    <View className="api-container">
      <View
        style={{ margin: "10px", backgroundColor: "#fff", borderRadius: "8px" }}
      >
        <AtGrid data={gridData} onClick={handleClick} />
      </View>
    </View>
  );
};

export default Api;
