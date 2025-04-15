import { View, MovableArea, MovableView, Text } from "@tarojs/components";

import "./index.scss";

const Movable = () => {
  return (
    <View className="movable-container">
      <View className="movable-section">
        <Text className="section-title">全方向移动</Text>
        <MovableArea className="movable-area">
          <MovableView className="movable-view" direction="all" />
        </MovableArea>
      </View>

      <View className="movable-section">
        <Text className="section-title">水平方向移动</Text>
        <MovableArea className="movable-area">
          <MovableView
            className="movable-view movable-view-x"
            direction="horizontal"
          />
        </MovableArea>
      </View>

      <View className="movable-section">
        <Text className="section-title">垂直方向移动</Text>
        <MovableArea className="movable-area">
          <MovableView
            className="movable-view movable-view-y"
            direction="vertical"
          />
        </MovableArea>
      </View>
    </View>
  );
};

export default Movable;
