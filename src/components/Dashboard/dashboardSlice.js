import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardMainPage: true,
};

const createDashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardMainPage(state, action) {
      state.dashboardMainPage = action.payload;
    },
  },
});
export const { setDashboardMainPage } = createDashboardSlice.actions;
export default createDashboardSlice.reducer;
