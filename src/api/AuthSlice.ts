import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ UserName, login, password}: any, thunkAPI) => {
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
  async ({ login, password }: any, thunkAPI) => {
    try {
      const response = await fetch(
        'http://dev.trainee.dex-it.ru/api/Auth/SignIn',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login,
            password,
          }),
        }
      );
      const data = await response.json();
      console.log('response', data);

      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

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
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    // Extra reducer comes here
    [signupUser.fulfilled as any]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.username = payload.name;
    },
    [signupUser.pending as any]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected as any]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      // state.errorMessage = payload.message;
    },

    [loginUser.fulfilled as any]: (state, { payload }) => {
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [loginUser.rejected as any]: (state, { payload }) => {
      console.log('payload', payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.status;
    },

    [loginUser.pending as any]: (state) => {
      state.isFetching = true;
    },
  },
})

export const authSelector = (state: any) => state.auth;
export const { clearState } = AuthSlice.actions;