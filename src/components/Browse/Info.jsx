import User from "../../assets/User.png";
import "./info.css";

const Info = () => {
  const info = JSON.parse(window.localStorage.getItem("form"));
  const genre = JSON.parse(window.localStorage.getItem("type"));

  return (
    <div className="infoContainer">
      <div>
        <img
          src={User}
          style={{
            height: "225px",
            width: "100px",
            position: "relative",
            top: "10px",
            left: "10px",
            borderRadius:"50px",
            boxShadow: "0px 2px 2px 0px ",
          }}
        />
      </div>

      <div className="userinfo">
        <p style={{ color: "white", fontSize: "22px"}}>{info.username}</p>
        <p style={{ color: "white", fontSize: "22px"}}>{info.email}</p>
        <p style={{ color: "white", fontSize: "36px"}}>{info.name}</p>
        <Chips categories={genre} color={"#9F94FF"} />
      </div>
    </div>
  );
};

const Chips = ({ color, categories }) => {
  return (
    <div  className="userCategories">
      {categories.map((category) => (
        <button className="card-btn">
          {category}
          <span className="btn-span"></span>
        </button>
      ))}
    </div>
  );
};

export default Info;
