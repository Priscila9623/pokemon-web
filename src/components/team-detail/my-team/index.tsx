import React, { useCallback } from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { Button, Empty, List } from 'antd';

import psyduckSad from '@assets/pokemon-psyduck-sad.png';
import Title from '@components/title';

import Character from '../character';
import { CharacterData } from '../character/types';

import './style.scss';
import { MyTeamProps } from './types';

function MyTeam(props: MyTeamProps) {
  const { data, onClickItem, onDelete } = props;

  const onDeletePokemon = (id: string) => {
    onDelete(id);
  };

  const renderItem = useCallback(
    (item: CharacterData) => (
      <List.Item>
        <div className="Team-detail-my-team__card">
          <Button
            icon={<DeleteOutlined />}
            shape="circle"
            type="primary"
            className="Team-detail-my-team__card__delete"
            onClick={() => onDeletePokemon(item.name)}
          />
          <Character data={item} onClick={onClickItem} />
        </div>
      </List.Item>
    ),
    []
  );

  return (
    <div className="Team-detail-my-team">
      <Title text="2 | Elegidos" />
      {!data.length ? (
        <Empty image={psyduckSad} description="Aún no tienes un equipo" />
      ) : (
        <List
          dataSource={data}
          className="Team-detail-my-team__list"
          renderItem={renderItem}
        />
      )}
    </div>
  );
}
export default MyTeam;
