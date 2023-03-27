import { TeamData } from '@api/firebase/teams-api/types';

export type TeamsListProps = {
  regionId?: string;
  data?: TeamData[];
  readonly?: boolean;
  loading: boolean;
  route?: string;
  refetch: () => void;
};
