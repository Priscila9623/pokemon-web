import React from 'react';

import cx from 'classnames';

import pokeball from '@assets/pokeball.png';
import Badge from '@components/badge';
import PokemonCard from '@components/pokemon-card';

import './style.scss';
import { CharacterProps } from './types';

function Character(props: CharacterProps) {
  const { data, onClick } = props;

  const onClickCard = () => {
    onClick(data.id);
  };
  return (
    <PokemonCard color={data.color} onClick={onClickCard}>
      <div className="Team-detail-character">
        <div>
          <div className="Team-detail-character__name">{data.name}</div>
          <div className="Team-detail-character__skills">
            {data.skills &&
              data.skills.map((s) => (
                <Badge key={s.ability.name} label={s.ability.name} />
              ))}
          </div>
        </div>
        <img
          src={data.image ?? pokeball}
          className={cx('Team-detail-character__img', {
            'Team-detail-character__img--non-empty': Boolean(data.image),
          })}
          alt="Pokemon showing who this pokemon is"
        />
      </div>
    </PokemonCard>
  );
}
export default Character;
