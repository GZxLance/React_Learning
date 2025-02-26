import { Card } from "antd";

const CustomCard = ({ cover, avatar, title, content }) => {
  return (
    <Card
      cover={
        <img
          alt="example"
          style={{ width: "300px", height: "150px" }}
          src={cover}
        />
      }
      actions={[
        <img
          key="avatar"
          alt="avatar"
          src={avatar}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%", // 设置圆角为 50% 实现圆形效果
            objectFit: "cover", // 确保图片按比例裁剪并填满容器
          }}
        />,
      ]}
    >
      <Card.Meta title={title} description={content} />
    </Card>
  );
};

export default CustomCard;
