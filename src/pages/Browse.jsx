import Info from "../components/Browse/Info";
import Weather from "../components/Browse/Weather"
import News from "../components/Browse/News";
import Notes from "../components/Browse/Notes";

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
      <div><News/></div>
      <div><Notes/></div>
    </div>
  );
};
export default Browse;
