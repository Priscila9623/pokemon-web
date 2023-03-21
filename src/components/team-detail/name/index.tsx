import React from 'react';

import { Input } from 'antd';

import Title from '@components/title';

import './style.scss';
import { NameProps } from './types';

function Name(props: NameProps) {
  const { teamName, onChange } = props;

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="Team-detail-name">
      <Title text="1 | Nombre del equipo" />
      <Input
        defaultValue={teamName}
        placeholder="¿Cómo llamaremos a este equipo?"
        className="Team-detail-name__input"
        onChange={onChangeText}
      />
    </div>
  );
}
export default Name;
