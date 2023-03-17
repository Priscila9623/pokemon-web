import React from 'react';

import './style.scss';
import { TitleProps } from './types';

function Title(props: TitleProps) {
  const { text, className } = props;
  return <div className={`Title ${className}`}>{text}</div>;
}
export default Title;
