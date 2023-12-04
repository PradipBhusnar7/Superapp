import Info from "../components/Browse/Info";
import Weather from "../components/Browse/Weather"

const Browse = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        paddingLeft: "3vw",
        paddingTop: "3vh",
        boxSizing: "border-box",
      }}
    >
      <div><Info /></div>
      <div><Weather/></div>
    </div>
  );
};
export default Browse;
