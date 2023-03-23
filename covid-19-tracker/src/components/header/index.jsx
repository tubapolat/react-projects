import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export const Header = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("GB");

  const getCountries = async () =>
    fetch("https://api.covid19api.com/countries");

  useEffect(() => {
    getCountries()
      .then((result) => result.json())
      .then((data) => {
        const orderedCountries = data.sort((a, b) =>
          a.Country > b.Country ? 1 : -1
        );
        setCountries(orderedCountries);
      });
  }, []);
  console.log(selectedCountry);
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <img src="../logo.jpg" className="App-logo" alt="logo" />
          <div className="col-auto">
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries &&
                countries.map((country) => (
                  <option value={country.ISO2}>{country.Country}</option>
                ))}
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
};
