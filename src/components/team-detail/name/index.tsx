import React from 'react';

import Input from '@components/input';
import Title from '@components/title';

import './style.scss';
import { NameProps } from './types';

function Name(props: NameProps) {
  const { teamName, onChange } = props;

  return (
    <div className="Team-detail-name">
      <Title text="1 | Nombre del equipo" />
      <Input
        value={teamName}
        placeholder="¿Cómo llamaremos a este equipo?"
        className="Team-detail-name__input"
        onChange={onChange}
      />
    </div>
  );
}
export default Name;
