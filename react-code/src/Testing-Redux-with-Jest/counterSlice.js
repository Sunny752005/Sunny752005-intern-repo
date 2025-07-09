import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDummyData = createAsyncThunk('counter/fetchDummy', async () => {
  return 5;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, status: 'idle' },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDummyData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchDummyData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value += action.payload;
      });
  }
});

export const { increment, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
