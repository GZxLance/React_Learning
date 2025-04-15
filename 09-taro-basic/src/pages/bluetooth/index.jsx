import { useState, useEffect } from "react";
import { View, Text, Button, ScrollView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

const Bluetooth = () => {
  const [devices, setDevices] = useState([]);
  const [scanning, setScanning] = useState(false);

  // 开始搜索蓝牙设备
  const startBluetoothDiscovery = async () => {
    setScanning(true);
    try {
      // 初始化蓝牙模块
      await Taro.openBluetoothAdapter();

      // 开始搜索
      await Taro.startBluetoothDevicesDiscovery({
        allowDuplicatesKey: false,
      });

      // 监听新设备发现事件
      Taro.onBluetoothDeviceFound((res) => {
        res.devices.forEach((device) => {
          setDevices((prevDevices) => {
            // 检查是否已存在该设备
            const exists = prevDevices.some(
              (d) => d.deviceId === device.deviceId
            );
            if (!exists) {
              return [...prevDevices, device];
            }
            return prevDevices;
          });
        });
      });

      Taro.showToast({
        title: "搜索开始",
        icon: "success",
      });
    } catch (err) {
      console.error("蓝牙初始化失败:", err);
      Taro.showToast({
        title: "蓝牙初始化失败: " + (err.errMsg || err.message),
        icon: "none",
      });
      setScanning(false);
    }
  };

  // 停止搜索
  const stopBluetoothDiscovery = async () => {
    try {
      await Taro.stopBluetoothDevicesDiscovery();
      setScanning(false);
      Taro.showToast({
        title: "已停止搜索",
        icon: "success",
      });
    } catch (err) {
      console.error("停止搜索失败:", err);
    }
  };

  // 清空设备列表
  const clearDevices = () => {
    setDevices([]);
  };

  // 组件卸载时清理蓝牙
  useEffect(() => {
    return () => {
      stopBluetoothDiscovery();
      Taro.closeBluetoothAdapter();
    };
  }, []);

  // 渲染设备信息项
  const renderDeviceItem = (device) => {
    return (
      <View key={device.deviceId} className="device-item">
        <View className="device-info">
          <Text className="device-name">{device.name || "未知设备"}</Text>
          <Text className="device-id">ID: {device.deviceId}</Text>
        </View>
        <Text className="rssi">信号强度: {device.RSSI}dBm</Text>
      </View>
    );
  };

  return (
    <View className="bluetooth-page">
      <Text className="title">蓝牙设备搜索</Text>

      <ScrollView scrollY className="devices-container">
        {devices.length > 0 ? (
          devices.map(renderDeviceItem)
        ) : (
          <Text className="empty-text">
            {scanning ? "搜索中..." : "暂无设备"}
          </Text>
        )}
      </ScrollView>

      <View className="control-panel">
        <Button
          className="control-btn"
          onClick={scanning ? stopBluetoothDiscovery : startBluetoothDiscovery}
          type={scanning ? "warn" : "primary"}
        >
          {scanning ? "停止搜索" : "开始搜索"}
        </Button>
        <Button
          className="control-btn"
          onClick={clearDevices}
          disabled={scanning}
        >
          清空列表
        </Button>
      </View>
    </View>
  );
};

export default Bluetooth;
