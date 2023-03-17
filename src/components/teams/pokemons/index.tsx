import React from 'react';

import { Tooltip } from 'antd';

import pokeball from '@assets/pokeball.png';

import './style.scss';
import { PokemonsProps } from './types';

function Pokemons(props: PokemonsProps) {
  const { data = [] } = props;

  return (
    <div className="Teams-pokemons">
      {data.map((item) => (
        <Tooltip title={item.name} key={item.id}>
          <img
            src={item.img || pokeball}
            alt={`${item.name} pokemon`}
            className="Teams-pokemons__item"
          />
        </Tooltip>
      ))}
    </div>
  );
}
export default Pokemons;
