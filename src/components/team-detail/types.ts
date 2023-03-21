import { CharacterData } from './character/types';

export type PokemonTeamData = {
  name: string;
  pokemons: CharacterData[];
};

export const MAX_TEAM_COUNT = 6;
export const MIN_TEAM_COUNT = 3;
