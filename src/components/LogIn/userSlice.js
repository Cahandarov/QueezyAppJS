import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isLogined: false,
  isRegistered: true,
  users: null,
  status: "idle",
  newUser: {
    userId: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    country: "",
  },
  SignUpStages: "idle",
  isForgotPassword: false,
  ResetPasswordStages: "ResetEmail",
};

async function getUserData() {
  try {
    const response = await axios.get("http://localhost:3000/users");
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export const getDataThunk = createAsyncThunk("users/fetchData", async () => {
  const users = await getUserData();
  return users;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginStatus(state, action) {
      if (state.isRegistered) {
        state.isLogined = action.payload;
      } else {
        return;
      }
    },

    setRegisteredStatus(state, action) {
      state.isRegistered = action.payload;
    },

    setSignUpStages(state, action) {
      state.SignUpStages = action.payload;
    },

    setForgotPasswordStatus(state, action) {
      state.isForgotPassword = action.payload;
    },

    setResetPasswordStages(state, action) {
      state.ResetPasswordStages = action.payload;
    },

    setAddUser(state, action) {
      const newUser = action.payload;

      state.users?.push(newUser);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDataThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getDataThunk.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const {
  setLoginStatus,
  setRegisteredStatus,
  setSignUpStages,
  setForgotPasswordStatus,
  setResetPasswordStages,
  setAddUser,
} = userSlice.actions;
export default userSlice.reducer;

// addUser(state, action:PayloadAction<{userId:string,firstName:string, lastName:string, email:string, password:string}>){
// state.user = action.payload
// state.isRegistered = true;
// }
