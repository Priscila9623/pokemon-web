import React from 'react';

import { useParams } from 'react-router-dom';

import { useGetTeamsByRegionUser } from '@api/services/firebase/teams-api';
import { useGetRegionById } from '@api/services/region-api';
import ResourceNotFound from '@components/error-view/resource-not-found';
import GoBack from '@components/go-back';
import TeamsList from '@components/teams/list';
import Title from '@components/title';
import TeamDetailPrevRouteEnum from '@enums/team-details-prev-route-enum';

import Actions from './actions';
import './style.scss';

function TeamsByRegion() {
  const { regionId } = useParams();
  const { data, isLoading, refetch } = useGetTeamsByRegionUser(regionId!);
  const { error } = useGetRegionById(regionId!);

  if (error?.response?.status === 404)
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
          className="Teams-by-region__text"
        />
      </div>
      <Actions />
      <TeamsList
        refetch={refetch}
        regionId={regionId}
        data={data}
        loading={isLoading}
        route={TeamDetailPrevRouteEnum.Regions}
      />
    </div>
  );
}
export default TeamsByRegion;
