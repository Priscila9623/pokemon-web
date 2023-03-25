export type CharacterData = {
  id?: string;
  name: string;
  types?: string[];
  image?: string;
  description?: string;
};

export type CharacterProps = {
  data: CharacterData;
  onClick: (id: string) => void;
};
