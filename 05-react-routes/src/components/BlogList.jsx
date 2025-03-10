import React from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";
import { List, Card, Typography, Row, Col, Divider, Tag } from "antd";

const { Title, Text } = Typography;

const BlogList = () => {
  return (
    <div style={{ width: "80%", margin: "50px auto" }}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 3,
        }}
        dataSource={blogs}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <Card>
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Title level={3}>
                    <Link to={`/blog/${index}`}>{item.title}</Link>
                  </Title>
                </Col>
                <Col span={24}>
                  <Row align="middle">
                    <Col>
                      <Text strong>By {item.author}</Text>
                    </Col>
                    <Col>
                      <Divider type="vertical" />
                    </Col>
                    <Col>
                      <Text>Views: {item.views}</Text>
                    </Col>
                    <Col>
                      <Divider type="vertical" />
                    </Col>
                    <Col>
                      <Text>Likes: {item.likes}</Text>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Row gutter={[16, 16]}>
                    <Col>
                      {item.tags.map((tag, idx) => (
                        <Tag key={idx} color="green">
                          {tag}
                        </Tag>
                      ))}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogList;
