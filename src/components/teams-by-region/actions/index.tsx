import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, useParams } from 'react-router-dom';

import TeamDetailPrevRouteEnum from '@enums/team-details-prev-route-enum';

import './style.scss';

function Actions() {
  const { regionId } = useParams();
  return (
    <div className="Teams-by-region-actions">
      <Link
        to={`/region/${regionId}/teams/new`}
        state={{ prevRoute: TeamDetailPrevRouteEnum.Regions }}
      >
        <Button
          type="primary"
          shape="round"
          icon={<PlusOutlined />}
          className="Teams-by-region-actions__button Teams-by-region-actions__button--new"
        >
          Nuevo equipo
        </Button>
      </Link>
    </div>
  );
}
export default Actions;
