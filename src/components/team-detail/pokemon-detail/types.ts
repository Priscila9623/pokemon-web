import { CharacterData } from '../character/types';

export type PokemonDetailProps = {
  pokemonId?: string;
  open: boolean;
  onClose: () => void;
  onAdd: (data: CharacterData) => void;
  count: number;
  team: string[];
};
