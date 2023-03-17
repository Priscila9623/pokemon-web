import React from 'react';

import { useParams } from 'react-router-dom';

import ResourceNotFound from '@components/error-view/resource-not-found';
import GoBack from '@components/go-back';
import TeamsList from '@components/teams/list';
import Title from '@components/title';

import Actions from './actions';
import './style.scss';

const data = Array.from({ length: 10 }, (_, i) => ({
  name: `Team ${i + 1}`,
  id: `t_${i + 1}`,
  members: Array.from({ length: 6 }, (m, j) => ({
    name: 'Squirtle',
    img: '',
    id: `p_${j + 1}`,
  })),
}));

const num = '1';

function TeamsByRegion() {
  const { regionId } = useParams();
  if (num === regionId)
    return (
      <ResourceNotFound
        message={`No pudimos encontrar la región ${regionId}`}
      />
    );
  return (
    <div className="Teams-by-region">
      <div className="Teams-by-region__title">
        <GoBack path="/" />
        <Title
          text={`Mis equipos / ${regionId}`}
          className="Teams-by-region__title__text"
        />
      </div>
      <Actions />
      <TeamsList regionId={regionId} data={data} />
    </div>
  );
}
export default TeamsByRegion;
