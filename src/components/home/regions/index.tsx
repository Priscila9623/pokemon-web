import React from 'react';

import { List, Spin } from 'antd';
import { Link } from 'react-router-dom';

import { useGetRegions } from '@api/services/region-api';
import { RegionResultsData } from '@api/services/region-api/types';
import PokemonCard from '@components/pokemon-card';
import Title from '@components/title';
import getListColor from '@utils/list-color';

import './style.scss';

function Regions() {
  const { isLoading, data } = useGetRegions();

  return (
    <div className="Home-regions">
      <Title text="Regiones" />
      <Spin tip="Cargando regiones" size="small" spinning={isLoading}>
        <List<RegionResultsData>
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
            xxl: 4,
          }}
          dataSource={data?.results ?? []}
          renderItem={(item, index) => (
            <List.Item>
              <Link to={`region/${item.name}`}>
                <PokemonCard color={getListColor(index)}>
                  <div className="Home-regions__name">{item.name}</div>
                </PokemonCard>
              </Link>
            </List.Item>
          )}
        />
      </Spin>
    </div>
  );
}
export default Regions;
