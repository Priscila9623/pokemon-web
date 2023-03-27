import { TeamPokemonData } from '@api/firebase/teams-api/types';

export type MyTeamProps = {
  data: TeamPokemonData[];
  onClickItem: (id: string) => void;
  onDelete: (id: string) => void;
  loading: boolean;
};
