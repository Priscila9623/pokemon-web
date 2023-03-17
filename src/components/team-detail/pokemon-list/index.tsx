import React from 'react';

import { List } from 'antd';

import Title from '@components/title';

import Character from '../character';

import './style.scss';
import { PokemonListProps } from './types';

function PokemonList(props: PokemonListProps) {
  const { data, onClickItem } = props;
  return (
    <div className="Team-detail-pokemon-list">
      <Title text="Pokemons" />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item onClick={onClickItem}>
            <Character data={item} />
          </List.Item>
        )}
      />
    </div>
  );
}
export default PokemonList;
