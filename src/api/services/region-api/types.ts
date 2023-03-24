export type RegionResultsData = {
  name: string;
  url: string;
};

export type RegionData = {
  count: number;
  results: RegionResultsData[];
};

export type PokemonByAreaData = {
  pokemon: {
    name: string;
  };
};
