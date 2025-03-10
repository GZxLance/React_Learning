import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";
import { Row, Col, Typography, Divider, Tag, Card } from "antd";
import "../app2.css"; // 引入全局样式文件

const { Title, Paragraph, Text } = Typography;

const BlogDetails = () => {
  const { blogIndex } = useParams();
  // 将字符串类型的blogIndex转换为整数类型
  const index = parseInt(blogIndex, 10);
  const blog = blogs[index];

  if (!blog) return <div>Blog not found</div>;

  return (
    <Card style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={2}>{blog.title}</Title>
        </Col>
        <Col span={24}>
          <Text type="secondary">
            By {blog.author} | Views: {blog.views} | Favorites: {blog.favorites}{" "}
            | Likes: {blog.likes}
          </Text>
        </Col>
        <Col span={24}>
          <img
            src={blog.img}
            alt="Blog Cover"
            style={{ width: "400px", borderRadius: "8px" }}
          />
        </Col>
        <Col span={24}>
          <Paragraph>{blog.content}</Paragraph>
        </Col>
        <Col span={24}>
          {blog.tags.map((tag, idx) => (
            <Tag key={idx} color="blue">
              {tag}
            </Tag>
          ))}
        </Col>
      </Row>
    </Card>
  );
};

export default BlogDetails;
