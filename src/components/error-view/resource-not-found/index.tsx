import React from 'react';

import psyduck from '@assets/pokemon-psyduck.png';

import ErrorView from '../template';

import './style.scss';
import { ResourceNotFoundProps } from './types';

function ResourceNotFound(props: ResourceNotFoundProps) {
  const { message } = props;
  return (
    <ErrorView message={message} color="brown">
      <div className="Resource-not-found">
        <img src={psyduck} alt="Psyduck confused" />
      </div>
    </ErrorView>
  );
}
export default ResourceNotFound;
