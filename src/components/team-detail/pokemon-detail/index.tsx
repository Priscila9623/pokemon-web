import React, { useMemo } from 'react';

import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Spin } from 'antd';
import cx from 'classnames';

import { useGetPokemonById } from '@api/services/pokemon-api';
import pokeball from '@assets/pokeball.png';
import pokemonBg from '@assets/pokemon-bg.png';
import Badge from '@components/badge';
import getListColor from '@utils/list-color';

import { MAX_TEAM_COUNT } from '../types';

import './style.scss';
import { PokemonDetailProps } from './types';

function PokemonDetail(props: PokemonDetailProps) {
  const { open, onClose, pokemonId, onAdd, count, team } = props;
  const { isLoading, data } = useGetPokemonById(pokemonId!);
  const showButton = useMemo(
    () => count < MAX_TEAM_COUNT + 1 && !team.includes(pokemonId!),
    [pokemonId, count]
  );

  const onAddPokemon = () => {
    onAdd({
      id: String(data?.id) ?? '',
      name: data?.name ?? '',
      skills: data?.abilities,
      image: data?.sprites.front_default,
      color: 'aqua',
    });
  };

  if (!pokemonId) return <div />;

  return (
    <Drawer placement="right" onClose={onClose} open={open} closable={false}>
      <Spin tip="Cargando detalles del pokemon" spinning={isLoading}>
        <div
          className={`Team-detail-pokemon-detail Team-detail-pokemon-detail--color-${getListColor(
            data?.id!
          )}`}
        >
          <Button
            icon={<CloseCircleOutlined />}
            onClick={onClose}
            type="ghost"
            className="Team-detail-pokemon-detail__close"
          />
          <div className="Team-detail-pokemon-detail__top">
            <img
              src={pokemonBg}
              alt="Pokemon background"
              className="Team-detail-pokemon-detail__top__bg"
            />
            <div className="Team-detail-pokemon-detail__top__content">
              <div>
                <div className="Team-detail-pokemon-detail__top__content__name">
                  {data?.name ?? '-'}
                </div>
                <div className="Team-detail-pokemon-detail__top__content__details">
                  <div className="Team-detail-pokemon-detail__top__content__details__skills">
                    {data?.abilities.map((ab) => (
                      <Badge label={ab.ability.name} key={ab.ability.name} />
                    ))}
                  </div>
                  <div className="Team-detail-pokemon-detail__top__content__details__number">
                    #{data?.order ?? '-'}
                  </div>
                </div>
              </div>
              <img
                src={data?.sprites.front_default ?? pokeball}
                alt="Pokemon"
                className={cx('Team-detail-pokemon-detail__top__content__img', {
                  'Team-detail-pokemon-detail__top__content__img--empty':
                    !data?.sprites.front_default,
                })}
              />
            </div>
          </div>
          <div className="Team-detail-pokemon-detail__bottom">
            <div className="Team-detail-pokemon-detail__bottom__card">
              <div className="Team-detail-pokemon-detail__bottom__card__left">
                <div className="Team-detail-pokemon-detail__bottom__card__left__tag">
                  Peso
                </div>
                <div className="Team-detail-pokemon-detail__bottom__card__left__tag">
                  Altura
                </div>
              </div>
              <div className="Team-detail-pokemon-detail__bottom__card__right">
                <div className="Team-detail-pokemon-detail__bottom__card__right__description">
                  {data?.weight ?? '-'}lbs
                </div>
                <div className="Team-detail-pokemon-detail__bottom__card__right__description">
                  {data?.height ?? '-'}fts
                </div>
              </div>
            </div>
            {showButton && (
              <Button
                icon={<PlusOutlined />}
                onClick={onAddPokemon}
                type="primary"
                shape="round"
                className="Team-detail-pokemon-detail__bottom__button"
              >
                Añadir al equipo
              </Button>
            )}
          </div>
        </div>
      </Spin>
    </Drawer>
  );
}
export default PokemonDetail;
