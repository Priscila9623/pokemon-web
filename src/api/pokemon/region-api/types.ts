import { PokemonUrlData } from '../pokemon-common-types';

export type RegionResultsData = {
  name: string;
  url: string;
};

export type RegionData = {
  count: number;
  results: RegionResultsData[];
};

export type RegionDetailData = {
  name: string;
  locations: PokemonUrlData[];
  pokedexes: PokemonUrlData[];
};

export type PokemonByAreaData = {
  pokemon: {
    name: string;
  };
};

export type PokemonEntrieData = {
  pokemon_species: {
    name: string;
  };
};
