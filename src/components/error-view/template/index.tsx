import React from 'react';

import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './style.scss';
import { ErrorViewProps } from './types';

function ErrorView(props: ErrorViewProps) {
  const { children, message, color = 'pink' } = props;
  return (
    <div className={`Error-view Error-view--color-${color}`}>
      <div className="Error-view__content">
        {children}
        <div className="Error-view__message">{message}</div>
        <Link to="/">
          <Button danger type="primary" shape="round">
            Ir a inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default ErrorView;
