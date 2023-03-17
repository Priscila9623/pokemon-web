import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';

import Title from '@components/title';

import Character from '../character';

import './style.scss';
import { MyTeamProps } from './types';

function MyTeam(props: MyTeamProps) {
  const { data, onClickItem } = props;

  const onDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="Team-detail-my-team">
      <Title text="Elegidos" />
      <List
        dataSource={data}
        className="Team-detail-my-team__list"
        renderItem={(item) => (
          <List.Item>
            <div className="Team-detail-my-team__card">
              <Button
                icon={<DeleteOutlined />}
                shape="circle"
                type="primary"
                className="Team-detail-my-team__card__delete"
                onClick={onDelete}
              />
              <Character data={item} onClick={onClickItem} />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
export default MyTeam;
