import React from 'react';

export type PokemonCardColors =
  | 'yellow'
  | 'aqua'
  | 'pink'
  | 'sky-blue'
  | 'brown'
  | 'violet';

export type PokemonCardProps = {
  children: React.ReactNode;
  className?: string;
  width?: number;
  color?: PokemonCardColors;
  onClick?: () => void;
};
