import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');

export const addImg = createAsyncThunk(
  'img/addImg',
  async (dataImg: any, thunkAPI) => {
    try {
      const response = await fetch(
        'http://dev.trainee.dex-it.ru/api/Image/SaveImage',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: dataImg,
        }
      );
      const data = await response.text();
      console.log('Путь до картинки:', data);
      
      if (response.status === 200) {
        console.log(typeof data);
        return data;
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

export const ImgSlice = createSlice({
  name: "img",
  initialState: {
    imgSrc: '',

    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {

  },
  extraReducers: {
    [addImg.fulfilled.type]: (state, { payload }) => {
      state.imgSrc = payload;
      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [addImg.rejected.type]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      // state.errorMessage = payload.status;
    },

    [addImg.pending.type]: (state) => {
      state.isFetching = true;
    },
  }

})

export const imgSelector = (state: any) => state.img;