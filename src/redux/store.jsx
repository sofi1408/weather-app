import { configureStore } from "@reduxjs/toolkit";
import { createWeatherApi } from "./weatherApi";

export const store = configureStore({
    reducer:{
        [createWeatherApi.reducerPath]: createWeatherApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createWeatherApi.middleware)
})