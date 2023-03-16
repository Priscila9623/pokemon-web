import React from 'react';

import { List } from 'antd';

import Title from '@components/title';

import './style.scss';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

function Teams() {
  return (
    <div className="Home-teams">
      <Title text="Equipos" />
      <List
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.title} />
          </List.Item>
        )}
      />
    </div>
  );
}
export default Teams;
