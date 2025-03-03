import React, { useState, useEffect, useDebugValue } from "react";
import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import Time from "./components/Time";
import Weather from "./components/Weather";
import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import UserPage from "./components/UserPage";
import { UserProvider } from "./components/UserContext";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
import ListFilterParent from "./components/ListFilterParent";
import Parent from "./components/Parent";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import FocusInput from "./components/FocusInput";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import ComponentSize from "./components/ComponentSize";
import AnimateBox from "./components/AnimateBox";
import Data from "./components/Data";
import Search from "./components/Search";

// function useCustomHook(value) {
//   useDebugValue(value ? "Active" : "Inactive");
//   return value;
// }

function useApi(url) {
  const [data, setData] = useState(null);
  useDebugValue(data ? "Data Loaded" : "Loading");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [url]);
  return data;
}

const App = () => {
  // const [isActive, setIsActive] = useState(false);
  // useCustomHook(isActive);

  const data = useApi("https://api.xygeng.cn/one");
  if (!data) return <p>加载中...</p>;

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };
  return (
    <div>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <TodoList /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <Time /> */}
      {/* <Weather /> */}
      {/* <ThemeProvider>
          <ThemeButton />
        </ThemeProvider> */}
      {/* <UserPage /> */}
      {/* <UserProvider>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#E7F1FF",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <LoginForm />
            <LogoutButton />
          </div>
        </div>
      </UserProvider> */}

      {/* <ExpensiveCalculationParent /> */}
      {/* <ListFilterParent /> */}
      {/* <Parent /> */}
      {/* <ExpensiveComponentParent /> */}
      {/* <FocusInput /> */}
      {/* <Parent1 /> */}
      {/* <Parent2 /> */}
      {/* <ComponentSize /> */}
      {/* <AnimateBox /> */}
      {/* <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate" : "Activate"}
      </button> */}
      {/* <h2>{data.data.content}</h2>
      <p>来源：{data.data.origin}</p>
      <p>作者：{data.data.name}</p>
      <p>标签：{data.data.tag}</p> */}
      {/* <Data /> */}
      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default App;
