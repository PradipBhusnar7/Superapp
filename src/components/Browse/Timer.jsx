import up from "../../assets/up.png";
import down from "../../assets/down.png";
import colon from "../../assets/colon.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.css";

import { useState } from "react";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes == 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours == 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function hoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div className="timerContainer">
      <div
        style={{
          boxShadow:
            "0px 6px 26px 0px #0000009C inset, -3px -7.000000476837158px 16px 0px #5F58583B",
          background: "#191E39",
          borderRadius: "50%",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
          style={{ borderColor: "transparent" }}
          strokeWidth={7}
        >
          {({ remainingTime }) => (
            <span style={{ color: "white", fontSize: "30px" }}>
              {hoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>

      <div>
        <img src={colon} alt="" style={{width:"6px",height:"30px",position:"relative",left:"255px"}} />
      </div>
      <div>
        <img src={colon} alt="" style={{width:"6px",height:"30px",position:"relative",left:"385px"}} />
      </div>

      <div style={{ width: "35vw", textAlign: "center" }}>
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ textAlign: "center", padding: "6px" }}>
            <p
              style={{ position: "relative", bottom: "25px", color: "#949494" }}
            >
              Hours
            </p>
            <img
              style={{
                width: "13px",
                height: "13px",
                position: "relative",
                bottom: "20px",
              }}
              onClick={increaseHour}
              src={up}
            />
            <p style={{ position: "relative", bottom: "20px" }}>
              {hours < 10 ? `0${hours}` : hours}
            </p>
            <img
              style={{
                width: "13px",
                height: "13px",
                position: "absolute",
                left: "30.5rem",
                bottom: "63px",
              }}
              onClick={decreaseHour}
              src={down}
            />
          </div>
          <div style={{ textAlign: "center", padding: "6px" }}>
            <p
              style={{ position: "relative", bottom: "25px", color: "#949494" }}
            >
              Minutes
            </p>
            <img
              style={{
                width: "13px",
                height: "13px",
                position: "relative",
                bottom: "20px",
              }}
              onClick={increaseMinute}
              src={up}
            />
            
            <p style={{ position: "relative", bottom: "20px" }}>
              {minutes < 10 ? `0${minutes}` : minutes}
            </p>
            <img
              style={{
                width: "13px",
                height: "13px",
                position: "absolute",
                left: "40.3rem",
                bottom: "63px",
              }}
              onClick={decreaseMinute}
              src={down}
            />
          </div>

          

          <div style={{ textAlign: "center", padding: "6px" }}>
            <p
              style={{ position: "relative", bottom: "25px", color: "#949494" }}
            >
              Seconds
            </p>
            <img
              style={{
                width: "13px",
                height: "13px",
                position: "relative",
                bottom: "20px",
              }}
              onClick={increaseSecond}
              src={up}
            />
            <p style={{ position: "relative", bottom: "20px" }}>
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
            <img
              style={{
                width: "13px",
                height: "13px",
                position: "absolute",
                left: "51rem",
                bottom: "63px",
              }}
              onClick={decreaseSecond}
              src={down}
            />
          </div>
        </div>
        <div
          onClick={() => setPlaying((prev) => !prev)}
          style={{
            position: "relative",
            top: "19px",
            marginLeft: "53px",
            width: "418px",
            background: "#FF6A6A",
            borderRadius: "12px",
            padding: "6px",
            color: "white",
            textAlign: "center",
            cursor: "pointer",
            fontSize:"20px",
            fontFamily:"Roboto",
            fontWeight:"200",
            letterSpacing:"1px"
          }}
        >
          {playing ? <p>Pause</p> : <p>Start</p>}
        </div>
      </div>
    </div>
  );
};
export default Timer;
