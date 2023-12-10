import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
};

const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    setShowSidebar: (state, action) => {
      console.log("Action payload:", action.payload);
      state.showSidebar = action.payload;
    },
  },
});

export const { setShowSidebar } = mobileSlice.actions;
export default mobileSlice.reducer;
