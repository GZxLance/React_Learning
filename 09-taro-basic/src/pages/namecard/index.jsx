import { View } from "@tarojs/components";
import "./index.scss";
import { useState } from "react";
import NameCard from "../../components/NameCard";
import { AtForm, AtInput, AtButton } from "taro-ui";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    avatar: "",
  });

  const [cardInfo, setCardInfo] = useState(null);

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const generateCard = () => {
    setCardInfo({ ...formData });
  };

  const clearForm = () => {
    setFormData({
      name: "",
      phone: "",
      company: "",
      email: "",
      avatar: "",
    });
    setCardInfo(null);
  };

  return (
    <View className="namecard-page">
      <AtForm>
        <AtInput
          name="name"
          title="姓名"
          type="text"
          placeholder="请输入姓名"
          value={formData.name}
          onChange={(value) => handleInputChange("name", value)}
        />
        <AtInput
          name="phone"
          title="手机"
          type="phone"
          placeholder="请输入手机号"
          value={formData.phone}
          onChange={(value) => handleInputChange("phone", value)}
        />
        <AtInput
          name="company"
          title="公司"
          type="text"
          placeholder="请输入公司名称"
          value={formData.company}
          onChange={(value) => handleInputChange("company", value)}
        />
        <AtInput
          name="email"
          title="邮箱"
          type="email"
          placeholder="请输入邮箱地址"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <AtInput
          name="avatar"
          title="头像"
          type="text"
          placeholder="请输入头像链接"
          value={formData.avatar}
          onChange={(value) => handleInputChange("avatar", value)}
        />
        <View className="button-group">
          <AtButton type="primary" onClick={generateCard}>
            生成名片
          </AtButton>
          <AtButton onClick={clearForm}>清空</AtButton>
        </View>
      </AtForm>
      {cardInfo && <NameCard cardInfo={cardInfo} />}
    </View>
  );
}
