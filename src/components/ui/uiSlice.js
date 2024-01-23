import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBarPage: true,
  rigthComponentPage: true,
  logoutModal: false,
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
    setLogoutModal(state, action) {
      state.logoutModal = action.payload;
    },
  },
});
export const { setSideBarPage, setRigthComponentPage, setLogoutModal } =
  createUiSlice.actions;
export default createUiSlice.reducer;
