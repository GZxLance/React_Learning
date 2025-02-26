// const MainProductList = () => {
//   const products = ["商品01", "商品02", "商品03", "商品04"];

//   return (
//     <>
//       <h2>商品列表</h2>
//       <ul>
//         {products.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default MainProductList;
import CustomCard from "./CustomCard";

const products = [
  {
    cover: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/TouXiang/Josef.png",
    avatar: "https://wanglanhua.oss-cn-beijing.aliyuncs.com/TouXiang/Josef.png",
    title: "标题1",
    content: "标题1标题1",
  },
  {
    cover:
      "https://wanglanhua.oss-cn-beijing.aliyuncs.com/62ec40e5-6064-4d65-bfb4-93f52df34302_Snipaste_2024-08-25_23-16-39.jpg",
    avatar:
      "https://wanglanhua.oss-cn-beijing.aliyuncs.com/62ec40e5-6064-4d65-bfb4-93f52df34302_Snipaste_2024-08-25_23-16-39.jpg",
    title: "标题2",
    content: "标题2标题2",
  },
  {
    cover:
      "https://wanglanhua.oss-cn-beijing.aliyuncs.com/b3c998e9-97fc-4642-b7d4-35b13c70b5b5_Snipaste_2023-12-28_00-40-46.jpg",
    avatar:
      "https://wanglanhua.oss-cn-beijing.aliyuncs.com/b3c998e9-97fc-4642-b7d4-35b13c70b5b5_Snipaste_2023-12-28_00-40-46.jpg",
    title: "标题3",
    content: "标题3标题3",
  },
];

const MainProductList = () => {
  return (
    <>
      <h2>商品列表</h2>
      <div style={{ display: "flex", gap: "1rem", margin: "0 250px" }}>
        {products.map((product) => (
          <CustomCard
            key={product.title}
            cover={product.cover}
            avatar={product.avatar}
            title={product.title}
            content={product.content}
          />
        ))}
      </div>
    </>
  );
};

export default MainProductList;
