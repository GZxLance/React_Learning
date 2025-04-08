import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./routes";
import UserProvider from "./components/UserProvider";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import CounterUseState from "./components/CounterUseState";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/actions";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <CounterUseState />
      <Profile />
      <TodoList />
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
      <div>
        <h1>计数器: {count}</h1>
        <button onClick={() => dispatch(increment())}>增加</button>
        <button onClick={() => dispatch(decrement())}>减少</button>
      </div>

      {/* <BrowserRouter>
        <nav>
          <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
            <li>
              <Link to="/">文章列表</Link>
            </li>
            <li>
              <Link to="/film">影视列表</Link>
            </li>
            <li>
              <Link to="/news">每日头条</Link>
            </li>
            <li>
              <Link to="/create">新建文章</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <AppRoutes />
      </BrowserRouter> */}
    </div>
  );
};

export default App;
