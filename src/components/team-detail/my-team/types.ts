import { CharacterData } from '../character/types';

export type MyTeamProps = {
  data: CharacterData[];
  onClickItem: (id: string) => void;
  onDelete: (id: string) => void;
};
