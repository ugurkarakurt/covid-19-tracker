import { CountryData } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { [country: string]: CountryData } = {};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setTotalCovidData(state, action: PayloadAction<{ [country: string]: CountryData }>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setTotalCovidData } = dataSlice.actions;
export default dataSlice.reducer;
