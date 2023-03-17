import { PokemonCardColors } from '@components/pokemon-card/types';

export type CharacterData = {
  id: string;
  name: string;
  skills?: { id: string; name: string }[];
  image?: string;
  color: PokemonCardColors;
};

export type CharacterProps = {
  data: CharacterData;
  onClick?: () => void;
};
