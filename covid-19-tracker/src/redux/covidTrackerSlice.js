import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  selectedCountry: "GB",
  countryData: {},
  isLoading: false,
};

const covidTrackerSlice = createSlice({
  name: "covidTracker",
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setCountryData: (state, action) => {
      state.countryData = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setSelectedCountry, setCountries, setCountryData, setLoading } =
  covidTrackerSlice.actions;

export default covidTrackerSlice.reducer;
