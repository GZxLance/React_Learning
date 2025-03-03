import { useState } from "react"; // 引入 React 的 useState Hook，用于管理组件的状态

const TodoList = () => {
  const [todos, setTodos] = useState([]); // 定义一个状态变量 todos，用于存储待办事项列表，默认为空数组
  const [inputValue, setInputValue] = useState(""); // 定义一个状态变量 inputValue，用于存储输入框的值，默认为空字符串

  // 添加待办事项的函数
  const addTodo = () => {
    setTodos([...todos, { text: inputValue, completed: false }]); // 将新的待办事项对象（包含文本和完成状态）添加到 todos 数组中
    setInputValue(""); // 清空输入框的值
  };

  // 切换待办事项完成状态的函数
  const toggleCompleted = (e) => {
    const newTodos = [...todos]; // 创建一个新的 todos 数组副本，避免直接修改原数组
    newTodos[e].completed = !newTodos[e].completed; // 反转指定索引处的待办事项的完成状态
    setTodos(newTodos); // 更新 todos 状态为新的数组
  };

  return (
    <div>
      <h1>TodoList清单</h1> {/* 标题 */}
      <div>
        {/* 输入框 */}
        <input
          type="text"
          value={inputValue} // 绑定输入框的值到 inputValue 状态
          onChange={(e) => setInputValue(e.target.value)} // 监听输入框的变化，实时更新 inputValue 状态
        />
        {/* 添加按钮 */}
        <button onClick={addTodo}>添加</button>{" "}
        {/* 点击按钮时调用 addTodo 函数，将输入框中的内容添加到待办事项列表 */}
      </div>
      <ul>
        {/* 遍历 todos 数组，渲染每个待办事项 */}
        {todos.map((todo, index) => (
          <li key={index}>
            {/* 显示待办事项的文本 */}
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none", // 如果事项已完成，显示划线；否则不显示
              }}
            >
              {todo.text} {/* 显示待办事项的文本 */}
            </span>
            {/* 切换完成状态的按钮 */}
            <button onClick={() => toggleCompleted(index)}>
              {todo.completed ? "已完成" : "未完成"}{" "}
              {/* 根据事项的完成状态，动态显示按钮文字 */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; // 导出组件，供其他地方使用
