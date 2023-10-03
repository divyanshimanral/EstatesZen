import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => "properties",
    }),
    getPropertyById: builder.query({
      query: (id) => `properties/${id}`,
    }),
  }),
});

export const { useGetPropertiesQuery, useGetPropertyByIdQuery } = propertyApi;
