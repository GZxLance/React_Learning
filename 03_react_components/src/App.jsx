// import Button from "./components/Button";
// import Button1 from "./components/Button1";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import RandomName from "./components/RandomName";
// import UserPage from "./components/UserPage";
// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeStudents from "./components/WelcomeStudents";
// import WelcomeFunc from "./components/WelocomeFunc";

// import InputParent from "./components/InputParent";
// import NavBar from "./components/navBar/NavBar";
// import NavBar2 from "./components/navBar/NavBar2";
import Card from "./components/my-card/Card";

// import { Layout } from "antd";

// const { Content } = Layout;

const App = () => {
  // const handleClick = () => {
  //   alert("点击了按钮！");
  // };

  return (
    <>
      {/* <WelcomeClass name="React!!!" />
      <WelcomeFunc name="React 组件！！！" /> */}
      {/* <WelcomeStudents
        name="Lance"
        age="18"
        img={
          "https://wanglanhua.oss-cn-beijing.aliyuncs.com/TouXiang/Josef.png"
        }
        contect="欢迎"
      /> */}
      {/* <RandomName /> */}
      {/* <Layout style={{ minHeight: "100vh" }}>
        <Header />
        <Content>
          <Main />
        </Content>
        <Footer />
      </Layout> */}
      {/* <Button onClick={handleClick} /> */}
      {/* <UserPage /> */}
      {/* <Button1 onClick={handleClick} /> */}
      {/* <InputParent /> */}
      {/* <NavBar>
        <button>按钮</button>
        <h2>哈哈哈</h2>
        <i>斜体文本</i>
      </NavBar> */}
      {/* <NavBar2
        leftSlot={<button>按钮</button>}
        centerSlot={<h2>呵呵呵</h2>}
        rightSlot={<i>斜体2</i>}
      /> */}
      <Card
        header={<h1>Card组件学习</h1>}
        body={<div>主要内容:Card组件学习Card组件学习Card组件学习</div>}
        footer={<button>这是按钮</button>}
      />
      <Card
        header={<h1>Card组件学习222</h1>}
        body={<div>主要内容:Card组件学习222Card组件学习222Card组件学习222</div>}
        footer={<button>这是按钮2222</button>}
      />
    </>
  );
};

export default App;
