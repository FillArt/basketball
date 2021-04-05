import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');

export const getTeams = createAsyncThunk(
  'teams/getTeams',
  async () => {
    try {
      const response = await fetch(
        'http://dev.trainee.dex-it.ru/api/Team/GetTeams',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }
          });
          
      const data = await response.json();

      if (response.status === 200) {
        return { ...data};
      } else {
        console.log('Ошибка')
      }

    } catch (e) {
      console.log('Error', e.response.data);
      // return thunkAPI.rejectWithValue(e.response.data);
    }
  } 
)

export const addTeam = createAsyncThunk(
  'teams/addTeam',
  async ({ name, foundationYear, division, conference, imageUrl}: any, thunkAPI) => {
    try {
      const response = await fetch(
        'http://dev.trainee.dex-it.ru/api/Team/Add',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            foundationYear,
            division,
            conference,
            imageUrl
          }),
        }
      );
      const data = await response.json();
      console.log('Добавил команду', data);
      
      if (response.status === 200) {
        return { ...data };
      } else {
        console.log(data);
        return thunkAPI.rejectWithValue(data);
      }

    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const TeamSlice = createSlice({
  name: "team",
  initialState: {
    teams: [],

    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {

  },
  extraReducers: {
    [getTeams.fulfilled.type]: (state, { payload }) => {
      state.teams = payload.data;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [getTeams.rejected.type]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      // state.errorMessage = payload.status;
    },

    [getTeams.pending.type]: (state) => {
      state.isFetching = true;
    },
  }

})

export const teamSelector = (state: any) => state.team;