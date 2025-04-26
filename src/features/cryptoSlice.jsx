import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../utils/sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData,
  },
  reducers: {
    updateAsset(state, action) {
      const index = state.assets.findIndex(asset => asset.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = action.payload;
      }
    },
  },
});

export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
