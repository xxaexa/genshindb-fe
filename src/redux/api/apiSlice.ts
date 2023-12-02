import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArtifactResponse, ICharacterResponse, IWeaponResponse } from "./type";
interface CharacterQueryParams {
  star?: number;
}
export const artifactApi = createApi({
  reducerPath: "artifactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gidb-backend.vercel.app/api/genshin/",
  }),
  tagTypes: ["Artifacts"],
  endpoints: (builder) => ({
    getArtifact: builder.query<IArtifactResponse[], CharacterQueryParams>({
      query({ star }) {
        return {
          url: `artifact?star=${star || ""}`,
        };
      },
      transformResponse: (result: { artifact: IArtifactResponse[] }) =>
        result.artifact,
      providesTags: (_id) => {
        return [{ type: "Artifacts", _id }];
      },
    }),
    getCharacter: builder.query<ICharacterResponse[], CharacterQueryParams>({
      query({ star }) {
        return {
          url: `character?star=${star || 5}`,
        };
      },
      transformResponse: (result: { character: ICharacterResponse[] }) =>
        result.character,
      providesTags: (_id) => {
        return [{ type: "Artifacts", _id }];
      },
    }),
    getWeapon: builder.query<IWeaponResponse[], CharacterQueryParams>({
      query({ star }) {
        return {
          url: `weapon?star=${star || ""}`,
        };
      },
      transformResponse: (result: { weapon: IWeaponResponse[] }) =>
        result.weapon,
      providesTags: (_id) => {
        return [{ type: "Artifacts", _id }];
      },
    }),
  }),
});

export const { useGetArtifactQuery, useGetWeaponQuery, useGetCharacterQuery } =
  artifactApi;
