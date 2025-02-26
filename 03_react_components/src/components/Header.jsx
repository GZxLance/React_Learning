// import { Button } from "antd";

// const Header = () => {
//   return (
//     <div>
//       Header
//       <Button type="primary">这是一个组件库的按钮</Button>
//     </div>
//   );
// };
// export default Header;
import { Menu } from "antd";
import { HomeOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";

const Header = () => {
  const items = [
    { key: "1", label: "首页", icon: <HomeOutlined /> },
    { key: "2", label: "邮件", icon: <MailOutlined /> },
    { key: "3", label: "设置", icon: <SettingOutlined /> },
  ];

  return (
    <div>
      <Menu mode="horizontal" items={items} />
    </div>
  );
};

export default Header;
