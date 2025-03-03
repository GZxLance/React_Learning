import { useState } from "react";

const TextInput = () => {
  const [inputValue, setInputValue] = useState("abc");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange}></input>
      <div>当前输入的内容：{inputValue}</div>
    </div>
  );
};

export default TextInput;
