import { useQuery } from 'react-query';

import pokemonServer from '@api/pokemonServer';
import CachePokemonTagEnum from '@enums/cache-pokemon-tag-enum';

import { RegionData } from './types';

const REGION_API_PREFIX = '/region';

export const useGetRegions = () => {
  return useQuery<RegionData, Error>(
    CachePokemonTagEnum.Regions,
    async () => (await pokemonServer.get(REGION_API_PREFIX)).data
  );
};

export default {
  useGetRegions,
};
