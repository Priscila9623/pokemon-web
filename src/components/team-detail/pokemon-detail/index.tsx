import React from 'react';

import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';

import pokemonBg from '@assets/pokemon-bg.png';
import squirtle from '@assets/pokemon-squirtle.png';
import Badge from '@components/badge';

import './style.scss';
import { PokemonDetailProps } from './types';

function PokemonDetail(props: PokemonDetailProps) {
  const { open, onClose } = props;
  return (
    <Drawer placement="right" onClose={onClose} open={open} closable={false}>
      <div className="Team-detail-pokemon-detail">
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
                AAA
              </div>
              <div className="Team-detail-pokemon-detail__top__content__details">
                <div className="Team-detail-pokemon-detail__top__content__details__skills">
                  <Badge label="Fire" />
                  <Badge label="Smoke" />
                </div>
                <div className="Team-detail-pokemon-detail__top__content__details__number">
                  #00
                </div>
              </div>
            </div>
            <img
              src={squirtle}
              alt="Pokemon"
              className="Team-detail-pokemon-detail__top__content__img"
            />
          </div>
        </div>
        <div className="Team-detail-pokemon-detail__bottom">
          <div className="Team-detail-pokemon-detail__bottom__description">
            Some description
          </div>
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
                905
              </div>
              <div className="Team-detail-pokemon-detail__bottom__card__right__description">
                17
              </div>
            </div>
          </div>
          <Button
            icon={<PlusOutlined />}
            onClick={onClose}
            type="primary"
            shape="round"
            className="Team-detail-pokemon-detail__bottom__button"
          >
            Añadir al equipo
          </Button>
        </div>
      </div>
    </Drawer>
  );
}
export default PokemonDetail;
