import React from 'react';

import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import { signOut } from '@services/firebase/auth';

import './style.scss';

function LogOut() {
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      // An error happened.
    }
  };

  return (
    <div className="Log-out">
      <Link to="/login">
        <Button
          icon={<LogoutOutlined />}
          shape="circle"
          size="large"
          onClick={logOut}
        />
      </Link>
    </div>
  );
}
export default LogOut;
