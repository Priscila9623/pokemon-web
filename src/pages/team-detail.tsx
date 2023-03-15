import React from 'react';

import { useParams } from 'react-router-dom';

function TeamDetail() {
  const params = useParams();
  const { teamId } = params;

  return <div>Team detail {teamId ?? 'New'}</div>;
}
export default TeamDetail;
