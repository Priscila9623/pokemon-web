export type TeamPokemonData = {
  name: string;
  img?: string;
  order?: number;
  types?: string[];
};

export type TeamData = {
  id?: string;
  name: string;
  regionName: string;
  regionUser: string;
  token: string;
  userId: string;
  pokemons: TeamPokemonData[];
};

export type TeamByTokenData = Pick<TeamData, 'pokemons' | 'name'>;
