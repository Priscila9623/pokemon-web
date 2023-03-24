export type CharacterData = {
  id?: string;
  name: string;
  skills?: { ability: { name: string } }[];
  image?: string;
  description?: string;
};

export type CharacterProps = {
  data: CharacterData;
  onClick: (id: string) => void;
};
