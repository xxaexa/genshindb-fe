import { configureStore } from "@reduxjs/toolkit";
import { artifactApi } from "./api/apiSlice";

export const store = configureStore({
  reducer: { [artifactApi.reducerPath]: artifactApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artifactApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
