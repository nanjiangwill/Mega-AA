import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    drawerToggle: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.drawer = !state.drawer;
    },
  },
});

// Action creators are generated for each case reducer function
export const { drawerToggle } = counterSlice.actions;

export default counterSlice.reducer;
