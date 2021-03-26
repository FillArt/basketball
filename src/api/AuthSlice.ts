import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    username: '',
    login: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    // Reducer comes here
  },
  extraReducers: {
    // Extra reducer comes here
  },
})

export const authSelector = (state: any) => state.auth;
