import { PokemonCardColors } from '@components/pokemon-card/types';

const getListColor = (position: number): PokemonCardColors => {
  const item = String(position + 1);
  if (item.startsWith('1') || item.startsWith('7')) return 'yellow';
  if (item.startsWith('2') || item.startsWith('8')) return 'aqua';
  if (item.startsWith('3') || item.startsWith('9')) return 'pink';
  if (item.startsWith('4')) return 'sky-blue';
  if (item.startsWith('5')) return 'brown';
  if (item.startsWith('6')) return 'violet';
  return 'yellow';
};

export default getListColor;
