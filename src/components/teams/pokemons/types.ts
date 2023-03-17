export type PokemonsData = {
  name: string;
  img?: string;
  id: string;
};

export type PokemonsProps = {
  data: PokemonsData[];
};
