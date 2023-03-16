import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './style.scss';
import { ErrorViewProps } from './types';

function ErrorView(props: ErrorViewProps) {
  const { children, message, color = 'pink' } = props;
  return (
    <div className={`Error-view Error-view--color-${color}`}>
      <div className="Error-view__container">
        {children}
        <div className="Error-view__container__message">{message}</div>
        <Button danger type="primary" shape="round">
          <Link to="/">Ir a inicio</Link>
        </Button>
      </div>
    </div>
  );
}
export default ErrorView;
