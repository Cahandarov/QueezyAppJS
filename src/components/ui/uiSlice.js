import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarPage: true,
  rigthComponentPage: true,
};

const createUiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSideBarPage(state, action) {
      state.sideBarPage = action.payload;
    },
    setRigthComponentPage(state, action) {
      state.rigthComponentPage = action.payload;
    },
  },
});
export const { setSideBarPage, setRigthComponentPage } = createUiSlice.actions;
export default createUiSlice.reducer;
