import React from 'react';

import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './style.scss';

function LogOut() {
  return (
    <div className="Log-out">
      <Link to="/login">
        <Button icon={<LogoutOutlined />} shape="circle" size="large" />
      </Link>
    </div>
  );
}
export default LogOut;
