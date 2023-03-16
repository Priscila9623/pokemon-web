import React from 'react';

import { Avatar, List } from 'antd';

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
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />
              }
              title={item.title}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
}
export default Teams;
