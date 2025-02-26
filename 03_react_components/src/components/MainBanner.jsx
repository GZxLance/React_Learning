// const MainBanner = () => {
//   return (
//     <div>
//       <h2>这里是轮播图</h2>
//     </div>
//   );
// };
// export default MainBanner;
import { Carousel } from "antd";

const MainBanner = () => {
  const content = [
    {
      key: "1",
      title: "这里是轮播图",
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/TouXiang/Josef.png",
    },
    {
      key: "2",
      title: "这里是轮播图",
      image:
        "https://wanglanhua.oss-cn-beijing.aliyuncs.com/62ec40e5-6064-4d65-bfb4-93f52df34302_Snipaste_2024-08-25_23-16-39.jpg",
    },
  ];

  return (
    <Carousel autoplay>
      {content.map((item) => (
        <div key={item.key}>
          <img
            style={{
              width: "1700px" /* 设置固定的宽度 */,
              height: "400px" /* 设置固定的高度 */,
              objectFit: "cover",
            }}
            alt=""
            src={item.image}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MainBanner;
