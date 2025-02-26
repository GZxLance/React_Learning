// const Input = ({ onInputChange }) => {
//   return (
//     <input
//       type="text"
//       //将输入的值传回给父组件
//       onChange={(e) => onInputChange(e.target.value)}
//       placeholder="请输入..."
//     />
//   );
// };

// export default Input;

const Input = ({ type, onInputChange, placeholder }) => {
  return (
    <input
      type={type}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
