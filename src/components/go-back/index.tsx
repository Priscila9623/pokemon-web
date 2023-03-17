import React from 'react';

import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './style.scss';
import { GoBackProps } from './types';

function GoBack(props: GoBackProps) {
  const { path } = props;
  return (
    <div className="Go-back">
      <Link to={path}>
        <Button icon={<ArrowLeftOutlined />} shape="circle" />
      </Link>
    </div>
  );
}
export default GoBack;
