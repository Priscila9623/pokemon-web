import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import TeamsList from '@components/teams/list';
import Title from '@components/title';

import './style.scss';

const data = Array.from({ length: 3 }, (_, i) => ({
  name: `Team ${i + 1}`,
  id: `t_${i + 1}`,
  members: Array.from({ length: i % 2 ? 6 : 4 }, (m, j) => ({
    name: 'Squirtle',
    img: '',
    id: `p_${j + 1}`,
  })),
}));

function Teams() {
  return (
    <div className="Home-teams">
      <Title text="Equipos" />
      <TeamsList data={data} readonly />
      <div className="Home-teams__see-more">
        <Link to="teams/">
          <Button type="primary" shape="round">
            Ver más...
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Teams;
