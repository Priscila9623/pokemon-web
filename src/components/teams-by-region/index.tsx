import React from 'react';

import { useParams } from 'react-router-dom';

import ResourceNotFound from '@components/error-view/resource-not-found';
import TeamsList from '@components/teams/list';
import Title from '@components/title';

import Actions from './actions';
import './style.scss';

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
      <Title text={`Mis equipos / ${regionId}`} />
      <Actions />
      <TeamsList regionId={regionId} />
    </div>
  );
}
export default TeamsByRegion;
