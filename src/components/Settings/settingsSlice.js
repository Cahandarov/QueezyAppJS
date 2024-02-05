import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updateProfilePage: true,
  changeEmailPage: false,
  changePasswordPage: null,
  logoutPage: false,
  FAQpage: false,
};

const createSettingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setUpdateProfilePage(state, action) {
      state.updateProfilePage = action.payload;
    },
    setChangeEmailPage(state, action) {
      state.changeEmailPage = action.payload;
    },
    setChangePasswordPage(state, action) {
      state.changePasswordPage = action.payload;
    },
    setLogoutPage(state, action) {
      state.logoutPage = action.payload;
    },
    setFAQpage(state, action) {
      state.FAQpage = action.payload;
    },
  },
});
export const {
  setUpdateProfilePage,
  setChangeEmailPage,
  setChangePasswordPage,
  setLogoutPage,
  setFAQpage,
} = createSettingsSlice.actions;
export default createSettingsSlice.reducer;
