import React from 'react';

import { ArrowLeftOutlined, SaveFilled } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

import './style.scss';
import { NameProps } from './types';

function Name(props: NameProps) {
  const { teamName } = props;
  return (
    <div className="Team-detail-name">
      <Space.Compact className="Team-detail-name__switch">
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          className="Team-detail-name__switch__icon"
        />
        <Input
          defaultValue={teamName}
          placeholder="¿Cómo llamaremos a este equipo?"
        />
        <Button
          type="primary"
          icon={<SaveFilled />}
          className="Team-detail-name__switch__icon"
        />
      </Space.Compact>
    </div>
  );
}
export default Name;
