import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

export const createWeatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://wttr.in/'}),
    endpoints: (builder) => ({
        getWeatherByCity: builder.query({
            query: (city) => `${city}?format=j1`,
        })
    })
})

export const { useGetWeatherByCityQuery } = createWeatherApi;