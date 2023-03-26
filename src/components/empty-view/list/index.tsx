import { Empty } from 'antd';

import squirtle from '@assets/pokemon-squirtle.png';

import { EmptyViewListProps } from './types';

function EmptyViewList(props: EmptyViewListProps) {
  const { message, loading } = props;

  return <Empty image={squirtle} description={loading ? '' : message} />;
}
export default EmptyViewList;
