import { useQuery } from 'react-query';

import CachePokemonTagEnum from '@enums/cache-pokemon-tag-enum';

import pokemonServer from '../pokemonServer';

import { PokemonData, PokemonResponseData, PokemonSpecieData } from './types';

const POKEMON_API_PREFIX = '/pokemon';

export const useGetPokemonById = (id: string) => {
  return useQuery<PokemonResponseData, Error>(
    [CachePokemonTagEnum.PokemonById, id],
    async () => {
      const pokemonData: PokemonData = (
        await pokemonServer.get(`${POKEMON_API_PREFIX}/${id}`)
      ).data;
      const specieData: PokemonSpecieData = (
        await pokemonServer.get(pokemonData.species.url)
      ).data;

      const specieEsData = specieData.flavor_text_entries.reduce(
        (prev, cur) => {
          if (cur.language.name === 'es') {
            if (prev === '') return cur.flavor_text;
            if (!prev.includes(cur.flavor_text))
              return `${prev} ${cur.flavor_text}`;
          }
          return prev;
        },
        ''
      );

      const types = pokemonData.types.map((t) => t.type.name);
      return {
        ...pokemonData,
        description: specieEsData.replace(/\n/g, ' '),
        types,
      };
    },
    { enabled: Boolean(id) }
  );
};

export default {
  useGetPokemonById,
};
