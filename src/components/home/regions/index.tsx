import React, { useCallback, useMemo } from 'react';

import { List, Spin } from 'antd';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { useGetRegions } from '@api/pokemon/region-api';
import { RegionResultsData } from '@api/pokemon/region-api/types';
import PokemonCard from '@components/pokemon-card';
import Title from '@components/title';
import getListColor from '@utils/list-color';

import './style.scss';

function Regions() {
  const { isLoading, data } = useGetRegions();

  const regionsList: Partial<RegionResultsData>[] = useMemo(
    () => [...(data?.results ?? []), { name: 'Todos' }],
    [data?.count]
  );

  const renderItem = useCallback(
    (item: Partial<RegionResultsData>, index: number) => {
      const isLast = index === (regionsList?.length ?? 0) - 1;
      return (
        <List.Item>
          <Link to={isLast ? '/teams' : `region/${item.name}`}>
            <PokemonCard
              color={!isLast ? getListColor(item.name) : undefined}
              className={cx({ 'Home-regions__item-last': isLast })}
            >
              <div className="Home-regions__name">{item.name}</div>
            </PokemonCard>
          </Link>
        </List.Item>
      );
    },
    [data?.count]
  );

  return (
    <div className="Home-regions">
      <Title text="Encuentra tus equipos por regiones" />
      <Spin tip="Cargando regiones" size="small" spinning={isLoading}>
        <List<Partial<RegionResultsData>>
          className="Home-regions__list"
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
            xxl: 4,
          }}
          dataSource={regionsList}
          renderItem={renderItem}
        />
      </Spin>
    </div>
  );
}
export default Regions;
