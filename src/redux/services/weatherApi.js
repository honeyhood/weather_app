import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (arg) => {
        const { city, units, lat, lon } = arg;
        return {
          url: `weather?q=${city}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`,
          params: {
            city,
            units,
            lat,
            lon,
          },
        };
      },
    }),
    getDayWeather: builder.query({
      query: (arg) => {
        const { city, lat, lon, excluded, units } = arg;
        return {
          url: `onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=${excluded}&appid=${process.env.REACT_APP_API_KEY}`,
          params: {
            city,
            lat,
            lon,
            excluded,
            units,
          },
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery, useGetDayWeatherQuery } = weatherApi;
