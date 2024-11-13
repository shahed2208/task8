
import { createSlice } from '@reduxjs/toolkit';
import { fetchData, setData } from '../actions/actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    [fetchData.type]: (state) => {
      state.loading = true;
    },
    [setData.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export default dataSlice.reducer;