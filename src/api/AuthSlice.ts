import { createSlice, createAsyncThunk, SliceCaseReducers } from '@reduxjs/toolkit';
import {typeStateGlobal} from "../helpers/types";
import { ISignUp, ILoginUser } from "../helpers/intefaces/requestInterfaces/AuthInterfaces";
import { IAuthSlice } from "../helpers/intefaces/storeInterfaces/AuthInterfaces";
import { userLogin } from "./request/auth";

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({data: { UserName, login, password}, redirect}: {data: ISignUp, redirect: () => void}, thunkAPI) => {
    try {
      const response = await fetch(
        'http://dev.trainee.dex-it.ru/api/Auth/SignUp',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            UserName,
            login,
            password,
          }),
        }
      );
      const data = await response.json();
      console.log('data', data);
      
      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.name);
        localStorage.setItem('avatar', data.avatarUrl);
        redirect();
        return { ...data, username: UserName };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async ({data: { login, password }, redirect}: { data: ILoginUser, redirect: () => void }, thunkAPI) => {
    try {
      const response = await userLogin('Auth/SignIn', JSON.stringify({login, password}));
        console.log('responce', response);

        localStorage.setItem('token', response.token);
        localStorage.setItem('username', response.name);
        localStorage.setItem('avatar', response.avatarUrl);

        redirect();
        return response;
    } catch (e) {
      console.log('Error', e.response.data);
    }
  }
);

export const AuthSlice = createSlice<IAuthSlice, SliceCaseReducers<IAuthSlice>, string>({
  name: "auth",
  initialState: {
    username: '',
    avatar: '',
    login: '',
    
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    // Reducer comes here
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    // Extra reducer comes here
    [signupUser.fulfilled.type]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.username = payload.name;
      state.avatar = payload.avatarUrl;
    },
    [signupUser.pending.type]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected.type]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
    },

    [loginUser.fulfilled.type]: (state, { payload }) => {
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected.type]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.status;
    },

    [loginUser.pending.type]: (state) => {
      state.isFetching = true;
    },
  },
})

export const authErrorSelector = (state: typeStateGlobal) => state.auth.isError;
export const authSelector = (state: typeStateGlobal) => state.auth;
export const { clearState } = AuthSlice.actions;
