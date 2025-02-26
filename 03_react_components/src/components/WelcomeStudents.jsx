const WelcomeStudents = ({ name, age, img, contect }) => {
  return (
    <>
      <h1>姓名：{name}</h1>
      <h1>年龄：{age}</h1>
      <img src={img} alt={`${name}'s avatar`} style={styles.img} />
      <h1>主页：{contect}</h1>
    </>
  );
};

export default WelcomeStudents;

const styles = {
  img: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};
