import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import TeamDetailPrevRouteEnum from '@enums/team-details-prev-route-enum';

import './style.scss';
import { ActionsProps } from './types';

function Actions(props: ActionsProps) {
  const { regionName } = props;
  return (
    <div className="Teams-by-region-actions">
      <Link
        to={`/region/${regionName}/teams/new`}
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
