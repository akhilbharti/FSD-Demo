// src/features/filters/filtersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  showCompleted: boolean;
}

const initialState: FiltersState = {
  showCompleted: true, // Initially show completed tasks
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleShowCompleted: (state) => {
      state.showCompleted = !state.showCompleted;
    },
  },
});

export const { toggleShowCompleted } = filtersSlice.actions;

export default filtersSlice.reducer;
