import React from 'react';

import { useParams } from 'react-router-dom';

import ResourceNotFound from '@components/error-view/resource-not-found';
import Title from '@components/title';

import Actions from './actions';
import TeamsByRegionList from './list';
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
      <Title text={`Equipos / ${regionId}`} />
      <Actions />
      <TeamsByRegionList />
    </div>
  );
}
export default TeamsByRegion;
