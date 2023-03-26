import React from 'react';

import { Input as InputAntd } from 'antd';

import './style.scss';
import { InputProps } from './types';

function Input(props: InputProps) {
  const { value, onChange, placeholder, className } = props;

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <InputAntd
      value={value}
      placeholder={placeholder}
      className={`Input ${className}`}
      onChange={onChangeText}
    />
  );
}
export default Input;
