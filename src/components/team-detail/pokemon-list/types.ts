import { CharacterData } from '../character/types';

export type PokemonListProps = {
  data: CharacterData[];
  onClickItem: (id: string) => void;
};
