import { useContext } from "react";
import { ForecastContext } from "../context/ForecastContext";

export const ShowForecast = () => {
  const { forecast } = useContext(ForecastContext);

  const iconUrl = `http://openweathermap.org/img/wn/${forecast.icon}@2x.png`;
  return (
    <div>
      <p>{forecast.temp} °C</p>
      <p>{forecast.wind} km/h</p>
      {forecast.icon && <img src={iconUrl} alt="icon" />}
    </div>
  );
};
