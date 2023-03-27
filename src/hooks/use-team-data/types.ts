import { TeamData } from '@api/firebase/teams-api/types';

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
