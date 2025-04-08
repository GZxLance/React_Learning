import React, { useState, useEffect } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";

import "./index.scss";

const Music = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext] = useState(() => Taro.createInnerAudioContext());

  const musicList = [
    {
      id: 1,
      title: "镜中花",
      artist: "任子墨",
      src: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/music/%E4%BB%BB%E5%AD%90%E5%A2%A8%2CHIGH5-%E9%A9%AC%E6%80%9D%E6%B6%B5SAI%20-%20%E9%95%9C%E4%B8%AD%E8%8A%B1.mp3",
      cover: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/music/cover2.jpg",
    },
    {
      id: 2,
      title: "水中月",
      artist: "任子墨",
      src: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/music/%E4%BB%BB%E5%AD%90%E5%A2%A8%2CHIGH5-%E9%A9%AC%E6%80%9D%E6%B6%B5SAI%20-%20%E6%B0%B4%E4%B8%AD%E6%9C%88.mp3",
      cover: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/music/cover3.jpg",
    },
    {
      id: 3,
      title: "知",
      artist: "ONER",
      src: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/music/ONER%20-%20%E7%9F%A5.mp3",
      cover: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/music/cover1.jpg",
    },
  ];

  useEffect(() => {
    // 初始化音频
    audioContext.src = musicList[currentIndex].src;

    // 监听音频播放结束
    audioContext.onEnded(() => {
      if (currentIndex < musicList.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsPlaying(false);
      }
    });

    return () => {
      audioContext.stop();
    };
  }, []);

  useEffect(() => {
    audioContext.src = musicList[currentIndex].src;
    if (isPlaying) {
      audioContext.play();
    }
  }, [currentIndex]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioContext.pause();
    } else {
      audioContext.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < musicList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View className="music-player">
      <View className="music-box">
        <View className="music-cover">
          <Image
            className={`cover-image ${isPlaying ? "playing" : ""}`}
            src={musicList[currentIndex].cover}
            mode="aspectFill"
          />
        </View>
        <View className="music-info">
          <Text className="title">{musicList[currentIndex].title}</Text>
          <Text className="artist">{musicList[currentIndex].artist}</Text>
        </View>
        <View className="controls">
          <AtButton
            size="small"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            上一首
          </AtButton>
          <AtButton size="small" onClick={handlePlayPause}>
            {isPlaying ? "暂停" : "播放"}
          </AtButton>
          <AtButton
            size="small"
            onClick={handleNext}
            disabled={currentIndex === musicList.length - 1}
          >
            下一首
          </AtButton>
        </View>
      </View>
    </View>
  );
};

export default Music;
