import { createContext, useState } from "react";

export const ForecastContext = createContext();

function ForecastProvider ({ children }) {
  const [forecast, setForecast] = useState({});
  const values = {
    forecast,
    setForecast,
  };
  return (
    <ForecastContext.Provider value={values}>
      {children}
    </ForecastContext.Provider>
  );
};

export default ForecastProvider;
