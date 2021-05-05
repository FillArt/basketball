
import { combineReducers } from '@reduxjs/toolkit';
import { AuthSlice } from '../api/AuthSlice';
import { TeamSlice } from '../api/TeamSlice';
import { ImgSlice } from '../api/ImgSlice';

export default combineReducers({
    auth: AuthSlice.reducer,
    team: TeamSlice.reducer,
    img: ImgSlice.reducer,
});