import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";

import counterReducer from "./features/counter/counterSlice";
import kanyaReducer from "./features/kanya/kanyaSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanyaQuote: kanyaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
