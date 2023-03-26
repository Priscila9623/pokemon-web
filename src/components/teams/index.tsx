import React from 'react';

import { useGetTeamsByUser } from '@api/services/firebase/teams-api';
import GoBack from '@components/go-back';
import Title from '@components/title';
import TeamDetailPrevRouteEnum from '@enums/team-details-prev-route-enum';

import TeamsList from './list';
import './style.scss';

function Teams() {
  const { data, isLoading } = useGetTeamsByUser();
  return (
    <div className="Teams">
      <div className="Teams__title">
        <GoBack path="/" />
        <Title text="Mis equipos" className="Teams__title__text" />
      </div>
      <TeamsList
        data={data}
        loading={isLoading}
        route={TeamDetailPrevRouteEnum.Teams}
      />
    </div>
  );
}
export default Teams;
