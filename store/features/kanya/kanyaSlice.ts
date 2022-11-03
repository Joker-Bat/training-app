import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import type { RootState } from "../../store";

export type KanyaState = {
  data: { quote: string };
  pending: boolean;
  error: boolean;
};

const initialState: KanyaState = {
  data: { quote: "click that button" },
  pending: false,
  error: false,
};

export const getKanyaQuote = createAsyncThunk("kanya/kanyaQuote", async () => {
  const response = await axios.get("https://api.kanye.rest/");

  return response.data;
});

export const kanyaSlice = createSlice({
  name: "kanya",
  initialState,
  reducers: {
    //
  },
  extraReducers(builder) {
    builder
      .addCase(getKanyaQuote.pending, (state) => {
        state.pending = true;
      })
      .addCase(getKanyaQuote.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getKanyaQuote.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectKanya = (state: RootState) => state.kanyaQuote;

export default kanyaSlice.reducer;
