export type PokemonAbilitiesData = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonFormsData = {
  name: string;
  url: string;
};

export type PokemonSpritesData = {
  front_default: string;
};

export type PokemonData = {
  abilities: PokemonAbilitiesData[];
  base_experience: number;
  forms: PokemonFormsData[];
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: PokemonSpritesData;
  weight: number;
};
