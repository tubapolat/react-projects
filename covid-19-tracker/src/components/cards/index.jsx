import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../helpers/formatter";
import { setCountryData, setLoading } from "../../redux/covidTrackerSlice";

export const Cards = () => {
  const { selectedCountry, countryData } = useSelector(
    (state) => state.covidTracker
  );
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://api.covid19api.com/country/GB`)
      .then((result) => result.json())
      .then((data) => dispatch(setCountryData(data[data.length - 1])));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setLoading(true));
    fetch(`https://api.covid19api.com/country/${selectedCountry}`)
      .then((result) => result.json())
      .then((data) => {
        dispatch(setCountryData(data[data.length - 1]));
        dispatch(setLoading(false));
      });
  }, [dispatch, selectedCountry]);
  console.log(JSON.stringify(countryData));

  return (
    <div class="row">
      <div class="col-sm-3">
        <div class="card bg-success text-white">
          <div class="card-body">
            <h5 class="card-title">Infected</h5>
            <p class="card-text fw-bolder fs-4 text">{countryData.Confirmed}</p>
            <p class="card-text ">
              Number of active cases in {countryData.Country}
            </p>
            <p class="card-text">
              Last updated at: {formatDate(countryData.Date)}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card bg-success text-white bg-opacity-75">
          <div class="card-body">
            <h5 class="card-title">Recovered</h5>
            <p class="card-text fw-bolder fs-4 text ">
              {countryData.Recovered}
            </p>
            <p class="card-text">
              Number of recovered cases in {countryData.Country}
            </p>
            <p class="card-text">
              Last updated at: {formatDate(countryData.Date)}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card bg-success text-dark bg-opacity-50">
          <div class="card-body">
            <h5 class="card-title">Deaths</h5>
            <p class="card-text fw-bolder fs-4 text ">{countryData.Deaths}</p>
            <p class="card-text">Number of death in {countryData.Country}</p>
            <p class="card-text">
              Last updated at: {formatDate(countryData.Date)}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="card bg-success text-dark bg-opacity-25">
          <div class="card-body">
            <h5 class="card-title">Active</h5>
            <p class="card-text fw-bolder fs-4 text">{countryData.Active}</p>
            <p class="card-text">
              Number of active cases in {countryData.Country}
            </p>
            <p class="card-text">
              Last updated at: {formatDate(countryData.Date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
