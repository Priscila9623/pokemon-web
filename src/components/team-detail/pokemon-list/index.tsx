import React, { useCallback, useEffect, useState } from 'react';

import { ConfigProvider, Divider, Input, List, Spin } from 'antd';

import { useGetPokemonsByRegions } from '@api/pokemon/region-api';
import EmptyViewList from '@components/empty-view/list';

import Character from '../character';

import './style.scss';
import { PokemonListProps } from './types';

const { Search } = Input;

function PokemonList(props: PokemonListProps) {
  const { onClickItem, regionId } = props;
  const { isLoading, isFetching, data, isSuccess } =
    useGetPokemonsByRegions(regionId);

  const [results, setResults] = useState<string[]>([]);

  const selectPokemon = (id: string) => {
    onClickItem(id);
  };

  const onSearch = (search: string) => {
    if (search.length === 0) {
      setResults(data!);
      return;
    }
    const resultsCopy = results.slice();
    const filteredResults = resultsCopy.filter((x) => x.includes(search));
    setResults(filteredResults);
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

  useEffect(() => {
    setResults(data ?? []);
  }, [isSuccess]);

  return (
    <div className="Team-detail-pokemon-list">
      <Divider orientation="left">Pokemons</Divider>
      <Search
        placeholder="Busca tus pokemons"
        allowClear
        enterButton="Buscar"
        size="large"
        onSearch={onSearch}
        className="Team-detail-pokemon-list__search"
      />
      {regionId && (
        <Spin
          tip="Cargando pokemons de la región"
          size="small"
          spinning={isLoading || isFetching}
        >
          <ConfigProvider renderEmpty={customizeRenderEmpty}>
            <List
              className="Team-detail-pokemon-list__items"
              grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 4,
                xxl: 4,
              }}
              dataSource={data && !isFetching ? results : []}
              renderItem={renderItem}
            />
          </ConfigProvider>
        </Spin>
      )}
    </div>
  );
}
export default PokemonList;
