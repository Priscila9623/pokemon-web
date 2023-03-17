import React from 'react';

import GoBack from '@components/go-back';
import Title from '@components/title';

import TeamsList from './list';
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

function Teams() {
  return (
    <div className="Teams">
      <div className="Teams__title">
        <GoBack path="/" />
        <Title text="Mis equipos" className="Teams__title__text" />
      </div>
      <TeamsList data={data} />
    </div>
  );
}
export default Teams;
