import React from 'react';

import Title from '@components/title';

import TeamsList from './list';
import './style.scss';

function Teams() {
  return (
    <div className="Teams">
      <Title text="Mis equipos" />
      <TeamsList />
    </div>
  );
}
export default Teams;
