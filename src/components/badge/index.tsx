import React from 'react';

import { Badge as BadgeAntd } from 'antd';

import './style.scss';
import { BadgeProps } from './types';

function Badge(props: BadgeProps) {
  const { label } = props;
  return <BadgeAntd className="Badge" count={label} />;
}
export default Badge;
