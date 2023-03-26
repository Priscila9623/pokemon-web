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

  const color = useMemo(() => getListColor(data.name), [data.name]);
  const types = useMemo(() => {
    if (!data.types) return [];
    const initialTypes = data.types?.slice(0, 2);
    return initialTypes;
  }, [data.types?.length]);
  const amountOfTypes = (data.types?.length ?? 0) - types.length || 0;

  const onClickCard = () => {
    onClick(data.name);
  };

  return (
    <PokemonCard color={color} onClick={onClickCard}>
      <div className="Team-detail-character">
        <div>
          <div className="Team-detail-character__name">{data.name}</div>
          <div className="Team-detail-character__skills">
            {types.map((s) => (
              <Badge key={s} label={s} />
            ))}
            {amountOfTypes > 0 && <Badge label={`+${amountOfTypes}`} />}
          </div>
        </div>
        <img
          src={data.img ?? pokeball}
          className={cx('Team-detail-character__img', {
            'Team-detail-character__img--non-empty': Boolean(data.img),
          })}
          alt="Pokemon showing who this pokemon is"
        />
      </div>
    </PokemonCard>
  );
}
export default Character;
