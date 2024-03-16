import { CountryData } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

const dataSlice = createSlice({
  name: 'countriesCovidData',
  initialState,
  reducers: {
    setCountriesCovidData(state, action: PayloadAction<{ [country: string]: CountryData }>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setCountriesCovidData } = dataSlice.actions;
export default dataSlice.reducer;
