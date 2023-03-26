import { TeamData } from '@api/services/firebase/teams-api/types';

export type TeamDataHookParams = {
  teamId?: string;
  regionName: string;
  token?: string;
};

export type TeamDataHookReturnType = {
  data: { team?: TeamData };
  loading: boolean;
  error: any;
};
