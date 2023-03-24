import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { PokemonUrlData } from '@api/pokemon-common-types';
import pokemonServer from '@api/pokemonServer';
import CachePokemonTagEnum from '@enums/cache-pokemon-tag-enum';

import { PokemonByAreaData, RegionData } from './types';

const REGION_API_PREFIX = '/region';

export const useGetRegions = () => {
  return useQuery<RegionData, Error>(
    CachePokemonTagEnum.Regions,
    async () => (await pokemonServer.get(REGION_API_PREFIX)).data
  );
};

export const useGetRegionById = (id: string) => {
  return useQuery<RegionData, AxiosError>(
    CachePokemonTagEnum.RegionById,
    async () => (await pokemonServer.get(`${REGION_API_PREFIX}/${id}`)).data,
    { enabled: Boolean(id) }
  );
};

export const useGetPokemonsByRegions = (regionId: string) => {
  return useQuery<string[], AxiosError>(
    CachePokemonTagEnum.Pokemons,
    async () => {
      const regionData = (
        await pokemonServer.get(`${REGION_API_PREFIX}/${regionId}`)
      ).data;
      const pokemons = await Promise.all(
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
