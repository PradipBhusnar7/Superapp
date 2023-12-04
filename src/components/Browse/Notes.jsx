import { useState } from "react";
import "./notes.css";

const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("notes"))
  );

  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("notes", JSON.stringify(text));
  };
  return (
    <div className="newsContianer">
      <p className="notesHeading">All notes</p>
      <textarea
        className="notesText"
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
export default Notes;
