import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isLogined: false,
  isRegistered: true,
  users: [],
  status: "idle",
  newUser: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    registerDate: "",
    lastChangeDateOfPassword: "",
    avatar: "",
    briefInfo: "",
    pointsTotal: [],
    favorites: [],
    badges: [],
    playedQuizzes: [],
    createdQuizzes: [],
  },

  // newUser: {},
  SignUpStages: "idle",
  addUserStatus: "idle",
  isForgotPassword: false,
  ResetPasswordStages: "ResetEmail",
};

async function getUserData() {
  try {
    const response = await axios.get("http://localhost:8080/users");
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

async function addUser(newUser) {
  try {
    console.log(newUser);
    const response = await axios.post("http://localhost:8080/users", newUser);
    console.log("User added successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error adding user data:",
      error.response?.data || error.message
    );
    throw error;
  }
}

export const postNewUserThunk = createAsyncThunk(
  "user/postData",
  async (newUser) => {
    const response = await addUser(newUser);
    return response;
  }
);

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
      state.newUser = action.payload;
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
      })

      .addCase(postNewUserThunk.fulfilled, (state, action) => {
        state.users = [...state.users, action.payload];
        state.addUserStatus = "succeeded";
      })

      .addCase(postNewUserThunk.pending, (state) => {
        state.addUserStatus = "loading";
      })
      .addCase(postNewUserThunk.rejected, (state) => {
        state.addUserStatus = "failed";
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
