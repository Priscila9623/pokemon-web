import React from 'react';

import './style.scss';
import { TitleProps } from './types';

function Title(props: TitleProps) {
  const { text } = props;
  return <h1 className="Title">{text}</h1>;
}
export default Title;
