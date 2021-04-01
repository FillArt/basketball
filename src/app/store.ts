import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from '../api/AuthSlice';
import { TeamSlice } from '../api/TeamSlice';

export default configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    team: TeamSlice.reducer,
  },
});