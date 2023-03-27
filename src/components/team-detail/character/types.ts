import { TeamPokemonData } from '@api/firebase/teams-api/types';

export type CharacterProps = {
  data: TeamPokemonData;
  onClick: (id: string) => void;
};
