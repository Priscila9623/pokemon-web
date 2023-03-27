import React from 'react';

import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { signOut } from '@services/firebase/auth';

import './style.scss';

function LogOut() {
  const logOut = async () => {
    try {
      signOut();
    } catch (error) {
      // An error happened.
    }
  };

  return (
    <div className="Log-out">
      <Button
        icon={<LogoutOutlined />}
        shape="circle"
        size="large"
        onClick={logOut}
      />
    </div>
  );
}
export default LogOut;
