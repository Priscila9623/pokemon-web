import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { PokemonUrlData } from '@api/pokemon-common-types';
import pokemonServer from '@api/pokemonServer';
import CachePokemonTagEnum from '@enums/cache-pokemon-tag-enum';

import {
  PokemonByAreaData,
  PokemonEntrieData,
  RegionData,
  RegionDetailData,
} from './types';

const REGION_API_PREFIX = '/region';

export const useGetRegions = () => {
  return useQuery<RegionData, Error>(
    CachePokemonTagEnum.Regions,
    async () => (await pokemonServer.get(REGION_API_PREFIX)).data
  );
};

export const useGetRegionById = (id: string) => {
  return useQuery<RegionDetailData, AxiosError>(
    CachePokemonTagEnum.RegionById,
    async () => (await pokemonServer.get(`${REGION_API_PREFIX}/${id}`)).data,
    {
      enabled: Boolean(id),
      retry: false,
      refetchOnWindowFocus: (error) =>
        (error as unknown as any)?.state?.error?.response?.status !== 404,
    }
  );
};

const getPokemonsByRegionsByPokedexes = (regionData: RegionDetailData) =>
  Promise.all(
    regionData.pokedexes.map(async (pokedex: PokemonUrlData) => {
      const pokedexesRequest = (await pokemonServer.get(pokedex.url)).data;

      return pokedexesRequest.pokemon_entries.map(
        ({ pokemon_species: { name } }: PokemonEntrieData) => name
      );
    })
  );

const getPokemonsByRegionsByLocation = (regionData: RegionDetailData) =>
  Promise.all(
    regionData.locations.map(async (location: PokemonUrlData) => {
      const locationRequest = (await pokemonServer.get(location.url)).data;

      return Promise.all(
        locationRequest.areas.map(async ({ url }: PokemonUrlData) => {
          const areasRequest = (await pokemonServer.get(url)).data;

          return areasRequest.pokemon_encounters.map(
            ({ pokemon }: PokemonByAreaData) => pokemon.name
          );
        })
      );
    })
  );

export const useGetPokemonsByRegions = (regionId: string) => {
  return useQuery<string[], AxiosError>(
    CachePokemonTagEnum.Pokemons,
    async () => {
      const regionData = (
        await pokemonServer.get(`${REGION_API_PREFIX}/${regionId}`)
      ).data;

      let pokemons = [];
      if ((regionData.pokedexes || [])?.length) {
        pokemons = await getPokemonsByRegionsByPokedexes(regionData);
      } else {
        pokemons = await getPokemonsByRegionsByLocation(regionData);
      }
      const uniquePokemons = Array.from(new Set(pokemons.flat(Infinity)) || []);
      return uniquePokemons;
    },
    { enabled: Boolean(regionId) }
  );
};

export default {
  useGetRegions,
  useGetRegionById,
  useGetPokemonsByRegions,
};
