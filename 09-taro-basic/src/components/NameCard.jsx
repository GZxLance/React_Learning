import React from "react";
import { View, Image } from "@tarojs/components";
import "./NameCard.scss";

const NameCard = ({ cardInfo }) => {
  const defaultAvatar =
    "https://wanglanhua.oss-cn-beijing.aliyuncs.com/image/F-diluke.jpg";

  return (
    <View className="name-card">
      <View className="avatar-container">
        <Image className="avatar" src={cardInfo.avatar || defaultAvatar} />
      </View>
      <View className="info-container">
        <View className="info-item">
          <View className="label">姓名</View>
          <View className="value">{cardInfo.name}</View>
        </View>
        <View className="info-item">
          <View className="label">手机</View>
          <View className="value">{cardInfo.phone}</View>
        </View>
        <View className="info-item">
          <View className="label">公司</View>
          <View className="value">{cardInfo.company}</View>
        </View>
        <View className="info-item">
          <View className="label">邮箱</View>
          <View className="value">{cardInfo.email}</View>
        </View>
      </View>
    </View>
  );
};

export default NameCard;
