import { CountryData } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  active: 0,
  cases: 0,
  continent: "",
  country: "",
  deaths: 0,
  population: 0,
  recovered: 0,
  tests: 0,
  updated: 0,
  countryInfo: {
    flag: '',
    lat: 0,
    long: 0
  },
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
