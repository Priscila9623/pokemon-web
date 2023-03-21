import React from 'react';

import { Empty } from 'antd';

import squirtle from '@assets/pokemon-squirtle.png';

import './style.scss';
import { EmptyViewListProps } from './types';

function EmptyViewList(props: EmptyViewListProps) {
  const { message } = props;

  return <Empty image={squirtle} description={message} />;
}
export default EmptyViewList;
