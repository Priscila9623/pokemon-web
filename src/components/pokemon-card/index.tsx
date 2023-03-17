import React from 'react';

import { Card } from 'antd';

import pokemonWaterFrame from '@assets/pokemon-water-frame-lighter.svg';

import './style.scss';
import { PokemonCardProps } from './types';

function PokemonCard(props: PokemonCardProps) {
  const { color = 'yellow', className = '', width, children, onClick } = props;
  return (
    <div className={`Pokemon-card Pokemon-card--color-${color} ${className}`}>
      <Card bordered={false} hoverable style={{ width }} onClick={onClick}>
        <div className="Pokemon-card__bg">
          <img src={pokemonWaterFrame} alt="pokemon card background" />
        </div>
        {children}
      </Card>
    </div>
  );
}
export default PokemonCard;
