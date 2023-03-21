import React from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { Button, Empty, List } from 'antd';

import psyduckSad from '@assets/pokemon-psyduck-sad.png';
import Title from '@components/title';

import Character from '../character';

import './style.scss';
import { MyTeamProps } from './types';

function MyTeam(props: MyTeamProps) {
  const { data, onClickItem, onDelete } = props;

  const onDeletePokemon = (id: string) => {
    onDelete(id);
  };

  return (
    <div className="Team-detail-my-team">
      <Title text="2 | Elegidos" />
      {!data.length ? (
        <Empty image={psyduckSad} description="Aún no tienes un equipo" />
      ) : (
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
                  onClick={() => onDeletePokemon(item.id)}
                />
                <Character data={item} onClick={onClickItem} />
              </div>
            </List.Item>
          )}
        />
      )}
    </div>
  );
}
export default MyTeam;
