import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, AppThunk } from './store';

const stock = createSlice({
  name: 'stock',
  initialState: {
    counter: 0,
  },
  reducers: {
    sum: (state, action: PayloadAction<[number, number]>) => {
      const [a , b] = action.payload;
      state.counter = a + b
    },
    sub: (state, action: PayloadAction<[number, number]>) => {
      const [a , b] = action.payload;
      state.counter = a - b;
    },
  },
});

export const { sum, sub } = stock.actions;
export default stock.reducer;

function sleep(ms: number) {
  return new Promise(res => setTimeout(res, ms));
}

export function asyncSum(payload: [number, number]): AppThunk {
  return async function(dispatch: AppDispatch) {
    await sleep(5000);
    dispatch(sum(payload))
  }
}

export function asyncSub(payload: [number, number]): AppThunk {
  return async function(dispatch: AppDispatch) {
    await sleep(5000);
    dispatch(sub(payload))
  }
}
