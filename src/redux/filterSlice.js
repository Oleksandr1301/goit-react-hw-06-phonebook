import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    setValueFilter(state, action) {
      state.value = action.payload;
    },
  },
});
export const { setValueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
