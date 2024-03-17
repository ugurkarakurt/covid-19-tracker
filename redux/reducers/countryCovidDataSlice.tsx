import { CountryData } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  active: 0,
  activePerOneMillion: 0,
  cases: 0,
  casesPerOneMillion: 0,
  continent: "",
  country: "",
  countryInfo: {
    iso2: "",
    iso3: "",
    flag: "",
    lat: 0,
    long: 0,
    _id: 0,
  },
  critical: 0,
  criticalPerOneMillion: 0,
  deaths: 0,
  deathsPerOneMillion: 0,
  oneCasePerPeople: 0,
  oneDeathPerPeople: 0,
  oneTestPerPeople: 0,
  population: 0,
  recovered: 0,
  recoveredPerOneMillion: 0,
  tests: 0,
  testsPerOneMillion: 0,
  todayCases: 0,
  todayDeaths: 0,
  todayRecovered: 0,
  updated: 0,
  message: ""
};

const dataSlice = createSlice({
  name: 'countryCovidData',
  initialState,
  reducers: {
    setcountryCovidData(state, action: PayloadAction<CountryData>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setcountryCovidData } = dataSlice.actions;
export default dataSlice.reducer;
