import { TeamPokemonData } from '@api/firebase/teams-api/types';

export type PokemonDetailProps = {
  pokemonId?: string;
  open: boolean;
  onClose: () => void;
  onAdd: (data: TeamPokemonData) => void;
  count: number;
  team: string[];
};
