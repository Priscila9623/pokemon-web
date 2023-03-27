import { TeamPokemonData } from '@api/firebase/teams-api/types';

export type CurrentTeamData = {
  name: string;
  pokemons: TeamPokemonData[];
};

export const MAX_TEAM_COUNT = 6;
export const MIN_TEAM_COUNT = 3;
