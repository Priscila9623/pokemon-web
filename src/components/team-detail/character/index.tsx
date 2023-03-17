import React from 'react';

import pokeball from '@assets/pokeball.png';
import Badge from '@components/badge';
import PokemonCard from '@components/pokemon-card';

import './style.scss';
import { CharacterProps } from './types';

function Character(props: CharacterProps) {
  const { data, onClick } = props;
  return (
    <PokemonCard color={data.color} onClick={onClick}>
      <div className="Team-detail-character">
        <div>
          <div className="Team-detail-character__name">{data.name}</div>
          <div className="Team-detail-character__skills">
            {data.skills &&
              data.skills.map((s) => <Badge key={s.id} label={s.name} />)}
          </div>
        </div>
        <img
          src={data.image ?? pokeball}
          alt="Pokemon showing who this pokemon is"
        />
      </div>
    </PokemonCard>
  );
}
export default Character;
