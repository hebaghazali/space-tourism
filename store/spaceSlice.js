import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destinations: [],
  crew: [],
  technology: [],
};

export const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {
    setDestinations: (state, action) => {
      state.destinations = action.payload;
    },
    setCrew: (state, action) => {
      state.crew = action.payload;
    },
    setTechnology: (state, action) => {
      state.technology = action.payload;
    },
  },
});

export const { setDestinations, setCrew, setTechnology } = spaceSlice.actions;

export default spaceSlice.reducer;
