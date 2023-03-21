import React from 'react';

import { ConfigProvider, Divider, List } from 'antd';

import EmptyViewList from '@components/empty-view/list';

import Character from '../character';

import './style.scss';
import { PokemonListProps } from './types';

const customizeRenderEmpty = () => (
  <EmptyViewList message="Parece que esta región se quedo sin pokemons" />
);

function PokemonList(props: PokemonListProps) {
  const { data, onClickItem } = props;

  const selectPokemon = (id: string) => {
    onClickItem(id);
  };

  return (
    <div className="Team-detail-pokemon-list">
      <Divider orientation="left">Pokemons</Divider>
      <ConfigProvider renderEmpty={customizeRenderEmpty}>
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
            <List.Item onClick={() => onClickItem(item.id)}>
              <Character data={item} onClick={() => selectPokemon(item.id)} />
            </List.Item>
          )}
        />
      </ConfigProvider>
    </div>
  );
}
export default PokemonList;
