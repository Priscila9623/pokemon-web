import React, { useMemo } from 'react';

import cx from 'classnames';

import pokeball from '@assets/pokeball.png';
import Badge from '@components/badge';
import PokemonCard from '@components/pokemon-card';
import getListColor from '@utils/list-color';

import './style.scss';
import { CharacterProps } from './types';

function Character(props: CharacterProps) {
  const { data, onClick } = props;

  const color = useMemo(() => getListColor(data.name), []);
  const skills = useMemo(() => {
    if (!data.skills) return [];
    const initialSkills = data.skills?.slice(0, 2);
    return initialSkills;
  }, [data.skills?.length]);
  const amountOfSkills = (data.skills?.length ?? 0) - skills.length || 0;

  const onClickCard = () => {
    onClick(data.name);
  };

  return (
    <PokemonCard color={color} onClick={onClickCard}>
      <div className="Team-detail-character">
        <div>
          <div className="Team-detail-character__name">{data.name}</div>
          <div className="Team-detail-character__skills">
            {skills.map((s) => (
              <Badge key={s.ability.name} label={s.ability.name} />
            ))}
            {amountOfSkills > 0 && <Badge label={`+${amountOfSkills}`} />}
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
