import { PokemonUrlData } from '@api/pokemon-common-types';

export type PokemonAbilitiesData = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonSpritesData = {
  front_default: string;
};

export type PokemonData = {
  abilities: PokemonAbilitiesData[];
  base_experience: number;
  forms: PokemonUrlData[];
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: PokemonSpritesData;
  weight: number;
  species: PokemonUrlData;
  description: string;
};

export type PokemonFlavorTextEntriesData = {
  flavor_text: string;
  language: PokemonUrlData;
  version: PokemonUrlData;
};

export type PokemonSpecieData = {
  flavor_text_entries: PokemonFlavorTextEntriesData[];
};
