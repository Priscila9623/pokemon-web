import { TeamPokemonData } from '@api/services/firebase/teams-api/types';

export type CharacterProps = {
  data: TeamPokemonData;
  onClick: (id: string) => void;
};
