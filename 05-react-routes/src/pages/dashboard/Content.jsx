import React from "react";
import { Card, Avatar, Typography } from "antd";

const { Title, Text } = Typography;

const Content = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Card style={{ width: 1200, textAlign: "left", margin: "20px auto" }}>
      <Avatar size={100} src={user.avatar} alt={`${user.username}'s avatar`} />
      <Title level={4} style={{ marginTop: 16 }}>
        {user.username}
      </Title>
      <Text strong>年龄:</Text> {user.age}
      <br />
      <Text strong>个性签名:</Text> {user.bio}
      <br />
      <Text strong>粉丝数:</Text> {user.followers}
      <br />
      <Text strong>关注数:</Text> {user.following}
    </Card>
  );
};

export default Content;
