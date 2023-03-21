import { PokemonCardColors } from '@components/pokemon-card/types';

export type CharacterData = {
  id: string;
  name: string;
  skills?: { ability: { name: string } }[];
  image?: string;
  color: PokemonCardColors;
};

export type CharacterProps = {
  data: CharacterData;
  onClick: (id: string) => void;
};
