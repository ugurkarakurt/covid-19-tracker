import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TotalData } from '@/types/types';

export const initialState: TotalData = {
  updated: 0,
  cases: 0,
  todayCases: 0,
  deaths: 0,
  todayDeaths: 0,
  recovered: 0,
  todayRecovered: 0,
  active: 0,
  critical: 0,
  casesPerOneMillion: 0,
  deathsPerOneMillion: 0,
  tests: 0,
  testsPerOneMillion: 0,
  population: 0,
  oneCasePerPeople: 0,
  oneDeathPerPeople: 0,
  oneTestPerPeople: 0,
  activePerOneMillion: 0,
  recoveredPerOneMillion: 0,
  criticalPerOneMillion: 0,
  affectedCountries: 0,
};

const dataSlice = createSlice({
  name: 'totalCovidData',
  initialState,
  reducers: {
    setTotalCovidData(state, action: PayloadAction<TotalData>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setTotalCovidData } = dataSlice.actions;
export default dataSlice.reducer;
