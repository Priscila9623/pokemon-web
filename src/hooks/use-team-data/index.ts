import { useGetTeamById, useGetTeamByToken } from '@api/firebase/teams-api';
import { useGetRegionById } from '@api/pokemon/region-api';

import { TeamDataHookParams, TeamDataHookReturnType } from './types';

const useTeamData = ({ teamId, regionName, token }: TeamDataHookParams) => {
  const {
    error: teamError,
    data: teamData,
    isLoading: teamLoading,
  } = useGetTeamById(teamId!);
  const {
    error: teamByTokenError,
    data: teamByTokenData,
    isLoading: teamByTokenLoading,
  } = useGetTeamByToken(token!);
  const { error: regionError } = useGetRegionById(regionName!);

  const returnData: TeamDataHookReturnType = {
    data: { team: token ? teamByTokenData : teamData },
    loading: teamLoading || teamByTokenLoading,
    error: teamError || teamByTokenError || regionError,
  };

  return returnData;
};

export default useTeamData;
