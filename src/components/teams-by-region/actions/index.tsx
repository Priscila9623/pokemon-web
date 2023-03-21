import React from 'react';

import { PlusOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, useParams } from 'react-router-dom';

import './style.scss';

function Actions() {
  const { regionId } = useParams();
  return (
    <div className="Teams-by-region-actions">
      <Link to={`/region/${regionId}/teams/new`}>
        <Button
          type="primary"
          shape="round"
          icon={<PlusOutlined />}
          className="Teams-by-region-actions__button Teams-by-region-actions__button--new"
        >
          Nuevo equipo
        </Button>
      </Link>
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
