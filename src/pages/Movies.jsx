import List from "../components/Movies/List";
import Profile from "../assets/profileSmall.png";
import styles from "../components/Movies/List.module.css";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const movies = JSON.parse(window.localStorage.getItem("type"));
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/another");
  };

  return (
  
    <>
      <div
        style={{
         
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
          maxHeight: "100vh",
          // border:"2px solid white"
        }}
      >
        <img
          src={Profile}
          style={{
            position: "absolute",
            top: "2vh",
            right: "3vw",
            height: "60px",
            width: "60px",
          // border:"2px solid white"

          }}
        />
        <p
          style={{
            color: "green",
            fontSize: "3rem",
            margin: "1vw",
           marginLeft:"20px"
          }}
          className={styles.header}
        >
          Super app
        </p>
        <p style={{ color: "white", fontSize: "2rem", margin: "2vw",marginLeft:"30px",fontFamily:"Roboto" }}>
          Entertainment according to your choice
        </p>
        {movies.map((movie) => (
          <List genre={movie} />
        ))}

        <div >
          <button style={{width:"150px",height:"30px",marginBottom:"10px",marginLeft:"82.2rem",lineHeight:"12px",background:"#148A08",fontSize:"18px"}}  onClick={handleClick} >Home Page</button>
        </div>
      </div>
    </>
  );
};

export default Movies;
