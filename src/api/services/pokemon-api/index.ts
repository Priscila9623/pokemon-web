import { useQuery } from 'react-query';

import pokemonServer from '@api/pokemonServer';
import CachePokemonTagEnum from '@enums/cache-pokemon-tag-enum';

import { PokemonData } from './types';

const POKEMON_API_PREFIX = '/pokemon';

export const useGetPokemonById = (id: string) => {
  return useQuery<PokemonData, Error>(
    [CachePokemonTagEnum.Pokemons, id],
    async () => (await pokemonServer.get(`${POKEMON_API_PREFIX}/${id}`)).data,
    { enabled: Boolean(id) }
  );
};

export default {
  useGetPokemonById,
};
