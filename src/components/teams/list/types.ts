export type TeamsListData = {
  name: string;
  members: {
    name: string;
    id: string;
    img?: string;
  }[];
};

export type TeamsListProps = {
  regionId?: string;
  data: TeamsListData[];
  readonly?: boolean;
};
