import React, { useCallback } from 'react';

import { ConfigProvider, Divider, List, Spin } from 'antd';

import { useGetPokemonsByRegions } from '@api/services/region-api';
import EmptyViewList from '@components/empty-view/list';

import Character from '../character';

import './style.scss';
import { PokemonListProps } from './types';

function PokemonList(props: PokemonListProps) {
  const { onClickItem, regionId } = props;
  const { isLoading, data } = useGetPokemonsByRegions(regionId);

  const selectPokemon = (id: string) => {
    onClickItem(id);
  };

  const customizeRenderEmpty = useCallback(
    () => (
      <EmptyViewList
        message="Parece que esta región se quedo sin pokemons"
        loading={isLoading}
      />
    ),
    [isLoading]
  );

  const renderItem = useCallback(
    (item: string) => (
      <List.Item onClick={() => onClickItem(item)}>
        <Character data={{ name: item }} onClick={() => selectPokemon(item)} />
      </List.Item>
    ),
    []
  );

  return (
    <div className="Team-detail-pokemon-list">
      <Divider orientation="left">Pokemons</Divider>
      {regionId && (
        <Spin
          tip="Cargando pokemons de la región"
          size="small"
          spinning={isLoading}
        >
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
              dataSource={data || []}
              renderItem={renderItem}
            />
          </ConfigProvider>
        </Spin>
      )}
    </div>
  );
}
export default PokemonList;
