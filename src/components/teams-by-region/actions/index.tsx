import React from 'react';

import { PlusOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import './style.scss';

function Actions() {
  return (
    <div className="Teams-by-region-actions">
      <Button
        type="primary"
        shape="round"
        icon={<PlusOutlined />}
        className="Teams-by-region-actions__button Teams-by-region-actions__button--new"
      >
        Nuevo equipo
      </Button>
      <Button
        type="primary"
        shape="round"
        icon={<UserAddOutlined />}
        className="Teams-by-region-actions__button Teams-by-region-actions__button--friend"
      >
        Equipo de un amigo
      </Button>
    </div>
  );
}
export default Actions;
