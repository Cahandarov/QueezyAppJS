import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface userData {
  users:string[] | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState :userData = {
    users:null,
    status: 'idle'
}

  async function getUserData (): Promise<string[] | null> {
    try{
      const response = await axios.get('http://localhost:3000/users');  
      // console.log(response.data)
      return response.data;
      
    }catch (error) {
        console.error('Error fetching user data:', error);
        return null;
      }
    
  };

  export const getDataThunk = createAsyncThunk('users/fetchData', async () => {
    const users = await getUserData();
    return users;
  });

 const userDataSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
          .addCase(getDataThunk.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getDataThunk.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.users = action.payload;
          })
          .addCase(getDataThunk.rejected, (state) => {
            state.status = 'failed';
          });
      },
 })

//  export default userDataSlice.reducer;