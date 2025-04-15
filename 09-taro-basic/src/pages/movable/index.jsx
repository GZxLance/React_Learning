import {
  View,
  MovableArea,
  MovableView,
  Text,
  Image,
} from "@tarojs/components";

import "./index.scss";

const Movable = () => {
  return (
    <View className="movable-container">
      <View className="movable-section">
        <Text className="section-title">在此区域可移动</Text>
        <MovableArea className="movable-area">
          <MovableView className="movable-view" direction="all">
            <Image
              src="https://wanglanhua.oss-cn-beijing.aliyuncs.com/icon/nainiumao.png"
              className="movable-image"
              mode="aspectFit"
            />
            咪咪
          </MovableView>
        </MovableArea>
      </View>
    </View>
  );
};

export default Movable;
