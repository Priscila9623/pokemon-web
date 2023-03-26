import React, { useCallback } from 'react';

import { DeleteOutlined } from '@ant-design/icons';
import { Button, Empty, List } from 'antd';

import { TeamPokemonData } from '@api/services/firebase/teams-api/types';
import charmanderSpinning from '@assets/pokemon-charmander-spinning.gif';
import psyduckSad from '@assets/pokemon-psyduck-sad.png';
import Title from '@components/title';

import Character from '../character';
import { MAX_TEAM_COUNT, MIN_TEAM_COUNT } from '../types';

import './style.scss';
import { MyTeamProps } from './types';

function MyTeam(props: MyTeamProps) {
  const { data, onClickItem, onDelete, loading } = props;

  const onDeletePokemon = (id: string) => {
    onDelete(id);
  };

  const renderItem = useCallback(
    (item: TeamPokemonData) => (
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
    [data.length]
  );

  return (
    <div className="Team-detail-my-team">
      <Title
        text="2 | Elegidos"
        description={`Puedes escoger entre ${MIN_TEAM_COUNT} a ${MAX_TEAM_COUNT} integrantes.`}
      />
      {!data.length || loading ? (
        <Empty
          image={loading ? charmanderSpinning : psyduckSad}
          description={
            loading ? 'Cargando tu equipo' : 'Aún no tienes un equipo'
          }
        />
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
