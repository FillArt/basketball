import {createSlice, createAsyncThunk, createSelector, SliceCaseReducers} from '@reduxjs/toolkit';
import {typeStateGlobal} from "../helpers/types";
import {ITeam, ITeamSlice} from "../helpers/intefaces/storeInterfaces/TeamInterfaces";
import {IAddTeamInterfaces} from "../helpers/intefaces/requestInterfaces/TeamInterfaces";
import {teamsAdd} from "./request/team";
// import {teamsAdd} from "./request/team";


const token = localStorage.getItem('token');

export const addTeam = createAsyncThunk(
    'teams/addTeam',
  async ({ name, foundationYear, division, conference, logoImg}: IAddTeamInterfaces, thunkAPI) => {
      try {
        const response = await teamsAdd('Team/Add',  JSON.stringify({name, foundationYear, division, conference, logoImg}), String(localStorage.getItem('token')) );
        console.log('Team Add', response);
        return { ...response };

      } catch (e) {
        console.log('Error', e.response.data);
//       return thunkAPI.rejectWithValue(e.response.data);
      }
  }
);



export const getTeams = createAsyncThunk(
  'teams/getTeams',
  async () => {
    try {
      const response = await fetch(
        'http://dev.trainee.dex-it.ru/api/Team/GetTeams',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
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



export const TeamSlice = createSlice<ITeamSlice, SliceCaseReducers<ITeamSlice>, string>({
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


    [addTeam.fulfilled.type]: (state, { payload }) => {
      state.teams = payload.data;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [addTeam.rejected.type]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
    },

    [addTeam.pending.type]: (state) => {
      state.isFetching = true;
    },
  }

})

export const teamsAllSelector = (state: typeStateGlobal) => state.team;

export const teamSelector = (state: typeStateGlobal, id: string) => ({teams: state.team.teams, id});

export const currentTeamSelector = createSelector(
  teamSelector,
  ({ teams, id }) => teams.find((t: ITeam) => t.id == Number(id)),
)