import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from '../api/AuthSlice';

export default configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
});