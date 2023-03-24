import { PokemonCardColors } from '@components/pokemon-card/types';

const testColor = (regex: RegExp, value: string) => regex.test(value);

const getListColor = (name?: string): PokemonCardColors => {
  if (!name) return 'yellow';
  if (testColor(/^[a-dA-D]/g, name)) return 'yellow';
  if (testColor(/^[e-hE-H]/g, name)) return 'aqua';
  if (testColor(/^[i-lI-L]/g, name)) return 'pink';
  if (testColor(/^[m-qM-Q]/g, name)) return 'sky-blue';
  if (testColor(/^[r-uR-U]/g, name)) return 'brown';
  if (testColor(/^[v-zV-Z]/g, name)) return 'violet';
  return 'yellow';
};

export default getListColor;
