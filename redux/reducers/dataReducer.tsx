import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types';

interface DataState extends Array<Todo> { }

const initialState: DataState = [];

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<Todo[]>) {
      return action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
