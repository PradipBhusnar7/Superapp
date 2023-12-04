import { useEffect, useState } from "react";
import "./weather.css";
import Humidity from "../../assets/humidity.png";
import Wind from "../../assets/wind.png";
import Line from "../../assets/Line.png";
import Pressure from "../../assets/pressure.png";

const Weather = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        "http://api.weatherapi.com/v1/current.json?key=987de39fe8924052ada80850232502&q=London&aqi=no"
      )
        .then(async (data) => await data.json())
        .then((data) => setWeather(data));
    };
    fetchWeather();
  }, []);

  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  });
  
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const erasedToday = dd + "-" + mm + "-" + yyyy;
    setDate(erasedToday);
  });
  return (
    <div className="weathercontainer">
      <div className="dateTime">
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div>
        {weather ? (
          <div className="files">
            {" "}
            <div>
              <img
                src={weather.current.condition.icon}
                style={{
                  width: "100px",
                  height: "100px",
                  position: "relative",
                  top: "10px",
                }}
              />
              <p className="weather">{weather.current.condition.text}</p>
            </div>
            {/* line1 */}
            <div>
              <img
                src={Line}
                alt=""
                style={{ width: "3px", height: "60px" }}
                className="lineOne"
              />
            </div>
            {/* pressure */}
           <div>
           <div className="prescontainer">
              <div>
                <img
                  src={Pressure}
                  alt=""
                  style={{ width: "20px", height: "37px" }}
                  className="preimg"
                />
              </div>
              <p className="pressure">
                <span>{weather.current.temp_c}</span>°C
              </p>
              <p className="pres">
                {weather.current.pressure_mb} mbar{" "}
                <span className="prename">Pressure</span>
              </p>
            </div>
           </div>
            {/* Line2 */}
            <div>
              <img
                src={Line}
                alt=""
                style={{ width: "3px", height: "60px" }}
                className="lineTwo"
              />
            </div>
            {/* wind */}
            <div>
              <div>
                <img src={Wind} alt="" className="windimg" />
              </div>
              <p className="wind">
                {weather.current.wind_kph}km/h{" "}
                <span className="windName"> wind</span>
              </p>

              {/* Humidity */}
              <div>
                <img src={Humidity} alt="" className="humimg" />
              </div>
              <p className="humidity">
                {weather.current.humidity}%{" "}
                <span className="humName">Humidity</span>
              </p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Weather;
