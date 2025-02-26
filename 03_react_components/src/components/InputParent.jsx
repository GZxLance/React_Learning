// import Input from "./input";
// import { useState } from "react";

// const InputParent = () => {
//   const [inputValue, setinputValue] = useState("");

//   const handleInputChange = (newVal) => {
//     //更新组件的状态
//     setinputValue(newVal);
//   };

//   return (
//     <>
//       <h2>输入的值是：{inputValue}</h2>
//       <Input onInputChange={handleInputChange} />
//     </>
//   );
// };

// export default InputParent;

import Input from "./Input";
import { useState } from "react";

const InputParent = () => {
  const [name, setName] = useState(""); // 用户名
  const [email, setEmail] = useState(""); // 邮箱
  const [submittedData, setSubmittedData] = useState(null); // 提交的数据

  const handleSubmit = () => {
    // 点击提交按钮后，保存数据
    setSubmittedData({ name, email });
  };

  return (
    <div>
      <h1>用户注册</h1>
      {/* 用户名输入框 */}
      <Input type="text" onInputChange={setName} placeholder="请输入用户名" />
      <p></p>
      {/* 邮箱输入框 */}
      <Input type="email" onInputChange={setEmail} placeholder="请输入邮箱" />
      <p></p>
      {/* 提交按钮 */}
      <button onClick={handleSubmit}>提交</button>

      {/* 显示提交的数据 */}
      {submittedData && (
        <div>
          <h2>提交数据:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default InputParent;
