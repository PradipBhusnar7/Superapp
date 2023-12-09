import Info from "../components/Browse/Info";
import Weather from "../components/Browse/Weather";
import News from "../components/Browse/News";
import Notes from "../components/Browse/Notes";
import Timer from "../components/Browse/Timer";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movie");
  };
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
      <div>
        <Info />
        <Weather />
      </div>

      <div>
        <Notes />
      </div>

      <div></div>
      <div>
        <News />
      </div>

      <div>
        <Timer />
      </div>

      <button
        style={{
          position: "absolute",
          top: "43.8rem",
          right: "4vw",
          width: "150px",
          height: "35px",
          background: "green",
          border: "none",
          color: "white",
          padding: "6px",
          borderRadius: "12px",
        }}
        onClick={handleClick}
      >
        Browse
      </button>
    </div>
  );
};
export default Browse;
