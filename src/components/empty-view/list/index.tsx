import React from 'react';

import squirtle from '@assets/pokemon-squirtle.png';

import './style.scss';
import { EmptyViewListProps } from './types';

function EmptyViewList(props: EmptyViewListProps) {
  const { message } = props;
  return (
    <div className="Empty-view-list">
      <div className="Empty-view-list__icon">
        <div className="Empty-view-list__icon__circle" />
        <img src={squirtle} alt="Squirtle pokemon" />
      </div>
      <p className="Empty-view-list__message">{message}</p>
    </div>
  );
}
export default EmptyViewList;
