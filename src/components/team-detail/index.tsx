import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import ResourceNotFound from '@components/error-view/resource-not-found';
import Title from '@components/title';

import { CharacterData } from './character/types';
import MyTeam from './my-team';
import Name from './name';
import PokemonDetail from './pokemon-detail';
import PokemonList from './pokemon-list';
import './style.scss';

const data: CharacterData[] = [
  {
    id: '1',
    name: 'Title 1',
    skills: [
      { name: 'skill', id: '1' },
      { name: 'skill', id: '7' },
    ],
    color: 'yellow',
  },
  {
    id: '2',
    name: 'Title 2',
    skills: [{ name: 'skill', id: '2' }],
    color: 'pink',
  },
  {
    id: '3',
    name: 'Title 3',
    skills: [{ name: 'skill', id: '3' }],
    color: 'aqua',
  },
  {
    id: '4',
    name: 'Title 4',
    skills: [{ name: 'skill', id: '4' }],
    color: 'violet',
  },
  {
    id: '5',
    name: 'Title 3',
    skills: [{ name: 'skill', id: '5' }],
    color: 'sky-blue',
  },
  {
    id: '5',
    name: 'Title 4',
    skills: [{ name: 'skill', id: '6' }],
    color: 'brown',
  },
];

const region = '1';
const team = '1';

function Teams() {
  const { teamId, regionId } = useParams();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  if (region === regionId || team === teamId)
    return (
      <ResourceNotFound message="No pudimos encontrar lo que estás buscando" />
    );

  return (
    <div className="Team-detail">
      <div className="Team-detail__container">
        <Title text={regionId!} />
        <Name teamName={teamId} />
      </div>
      <MyTeam data={teamId ? data : []} onClickItem={showDrawer} />
      <div className="Team-detail__container">
        <PokemonList data={data} onClickItem={showDrawer} />
      </div>
      <PokemonDetail data={{}} open={open} onClose={onClose} />
    </div>
  );
}
export default Teams;
