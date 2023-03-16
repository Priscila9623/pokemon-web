import React from 'react';

import { List } from 'antd';

import PokemonCard from '@components/pokemon-card';
import { PokemonCardColors } from '@components/pokemon-card/types';
import Title from '@components/title';

import './style.scss';

const data: { title: string; color: PokemonCardColors }[] = [
  {
    title: 'Title 1',
    color: 'yellow',
  },
  {
    title: 'Title 2',
    color: 'pink',
  },
  {
    title: 'Title 3',
    color: 'aqua',
  },
  {
    title: 'Title 4',
    color: 'violet',
  },
];

function Regions() {
  return (
    <div className="Home-regions">
      <Title text="Regiones" />
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
          <List.Item>
            <PokemonCard color={item.color}>
              <div className="Home-regions__name">{item.title}</div>
            </PokemonCard>
          </List.Item>
        )}
      />
    </div>
  );
}
export default Regions;
