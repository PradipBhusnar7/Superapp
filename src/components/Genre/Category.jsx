import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Category.module.css";
import Chips from "../Global/Chips";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import disclamir from "../../assets/disclamir.png";

const type = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "166px", height: "121px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "166px", height: "121px" }} src={drama} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "166px", height: "121px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "166px", height: "121px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#902500",
    image: <img style={{ width: "166px", height: "121px" }} src={western} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "166px", height: "121px" }} src={horror} />,
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: <img style={{ width: "166px", height: "121px" }} src={fantasy} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "166px", height: "121px" }} src={music} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "166px", height: "121px" }} src={fiction} />,
  },
];

const inlineStyles = {
  position: "relative",
  right: "10px",
  width: "20px",
  height: "20px",
};

const GenreComponent = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);

  const handleSignUp = () => {
    if (categories.length < 3) {
      setLengthError(true);
      return;
    } else {
      setLengthError(false);
      window.localStorage.setItem("type", JSON.stringify([...categories]));
      navigate("/next");
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.leftBox}>
        <div className={styles.superApp}>Super app</div>
        <div className={styles.group}>Choose your entertainment category</div>
        <div style={{ marginTop: "11vh" }}>
          <Chips
            categories={categories}
            color={"green"}
            setCategories={setCategories}
          />
          {lengthError ? (
            <p className={styles.error}>
              {" "}
              <span>
                <img src={disclamir} style={inlineStyles} />
              </span>
              Minimum 3 category required
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.rightBox}>
        {type.map((info, seq) => (
          <Section
            info={info}
            seq={seq}
            categories={categories}
            setCategories={setCategories}
          />
        ))}
      </div>
      <button className={styles.signUp} onClick={handleSignUp}>
        Next Page
      </button>
    </div>
  );
};

const Section = ({ info, seq, setCategories, categories }) => {
  const [selected, setSelected] = useState();
  const handleClick = (e) => {
    if (categories.includes(info.id)) {
      const index = categories.indexOf(info.id);
      categories.splice(index, 1);
      setCategories([...categories]);
    } else {
      setCategories([...categories, info.id]);
    }
    setSelected(!selected);
  };
  useEffect(() => {
    setSelected(categories.includes(info.id) == true);
  });
  return (
    <div
      info={info}
      onClick={(e) => handleClick(e)}
      key={seq}
      style={{
        background: info["color"],
        color: "white",
        padding: "14px",
        borderRadius: "15px",
        border: `${selected ? "4px solid green" : "4px solid none"}`,
      }}
    >
      <div style={{ marginBottom: "4px", fontSize: "17px" }}>{info.id}</div>
      {info.image}
    </div>
  );
};
export default GenreComponent;
