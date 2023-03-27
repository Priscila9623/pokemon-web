import {
  ref,
  push,
  query,
  equalTo,
  remove,
  update,
  orderByChild,
  get,
  child,
  set,
  limitToFirst,
} from 'firebase/database';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import CacheTeamTagEnum from '@enums/cache-teams-tag-enum';
import { auth, db } from '@services/firebase/firebase';

import { TeamByTokenData, TeamData } from './types';

const NODE = 'teams';

export const useGetTeamsByUser = () => {
  const user = auth.currentUser?.uid!;
  return useQuery<TeamData[], Error>(
    CacheTeamTagEnum.Teams,
    async () => {
      const queryRef = query(
        ref(db, NODE),
        orderByChild('userId'),
        equalTo(user)
      );
      const snap = await get(queryRef);
      const teams: TeamData[] = Object.entries(snap.val()).map(
        ([key, value]) => ({ ...(value as unknown as TeamData), id: key })
      );
      return teams;
    },
    { enabled: Boolean(user) }
  );
};

export const useGetTeamsByRegionUser = (region: string) => {
  const user = auth.currentUser?.uid!;
  return useQuery<TeamData[], Error>(
    `${CacheTeamTagEnum.TeamByRegion}-${region}`,
    async () => {
      const queryRef = query(
        ref(db, NODE),
        orderByChild('regionUser'),
        equalTo(`${region}_${user}`)
      );
      const snap = await get(queryRef);
      const teams: TeamData[] = Object.entries(snap.val() || {}).map(
        ([key, value]) => ({ ...(value as unknown as TeamData), id: key })
      );
      return teams;
    },
    { enabled: Boolean(region) }
  );
};

export const useGetTeamById = (idTeam: string) => {
  return useQuery<TeamData, Error>(
    `${CacheTeamTagEnum.Teams}-${idTeam}`,
    async () => {
      const snap = await get(child(ref(db, NODE), idTeam));

      if (!snap.exists()) {
        throw new Error('Not found');
      }

      return { ...snap.val(), id: idTeam };
    },
    {
      enabled: Boolean(idTeam),
      retry: false,
      refetchOnWindowFocus: (error) =>
        (error as unknown as any)?.state?.error?.message !== 'Not found',
    }
  );
};

export const useGetTeamByToken = (token: string) => {
  return useQuery<TeamByTokenData, Error>(
    `${CacheTeamTagEnum.Teams}-${token}`,
    async () => {
      const queryRef = query(
        ref(db, NODE),
        orderByChild('token'),
        equalTo(token),
        limitToFirst(1)
      );
      const snap = await get(queryRef);

      if (!snap.exists()) {
        throw new Error('Not found');
      }

      const team = Object.values(snap.val())[0] as unknown as TeamByTokenData;

      return { name: team.name, pokemons: team.pokemons, userId: team.userId };
    },
    {
      enabled: Boolean(token),
      retry: false,
      cacheTime: 0,
      refetchOnWindowFocus: (error) =>
        (error as unknown as any)?.state?.error?.message !== 'Not found',
    }
  );
};

export const useAddTeam = ({ onSuccess }: { onSuccess: () => void }) => {
  const queryClient = useQueryClient();
  return useMutation((team: TeamData) => set(push(ref(db, NODE)), team), {
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries([
        `${CacheTeamTagEnum.TeamByRegion}-${variables.regionName}`,
        CacheTeamTagEnum.Teams,
      ]);
      onSuccess();
    },
  });
};

export const useUpdateTeam = ({ onSuccess }: { onSuccess: () => void }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, team }: { id: string; team: TeamData }) =>
      update(ref(db, `${NODE}/${id}`), team),
    {
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries([
          `${CacheTeamTagEnum.TeamByRegion}-${variables.team.regionName}`,
          CacheTeamTagEnum.Teams,
          `${CacheTeamTagEnum.Teams}-${variables.id}`,
        ]);
        onSuccess();
      },
    }
  );
};

export const useDeleteTeam = ({ onSuccess }: { onSuccess: () => void }) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id }: { id: string; region: string }) =>
      remove(ref(db, `${NODE}/${id}`)),
    {
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({
          queryKey: [
            `${CacheTeamTagEnum.TeamByRegion}-${variables.region}`,
            CacheTeamTagEnum.Teams,
            `${CacheTeamTagEnum.Teams}-${variables.id}`,
          ],
        });
        onSuccess();
      },
    }
  );
};
export default {};
