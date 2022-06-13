import { useContext, useEffect, useState } from "react";
import { ForecastContext } from "../context/ForecastContext";
import { ShowForecast } from "./ShowForecast";

function ForecastContainer() {
  const { setForecast } = useContext(ForecastContext);

  function getWeather(city) {
    fetch(
      `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setForecast({
          temp: result.main.temp,
          wind: result.wind.speed,
          icon: result.weather[0].icon,
        });
      });
  }

  useEffect(()=>{
    getWeather("London")
  },[])

  const cities = ["London", "Oxford", "Cambridge"];
  const [city, setCity] = useState("London");
  return (
    <div>
      <select
        name="cities"
        id="cities"
        onChange={(e) => {
          setCity(e.target.value);
          getWeather(e.target.value);
        }}
      >
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <p>{city}</p>
      <ShowForecast />
    </div>
  );
}

export default ForecastContainer;
