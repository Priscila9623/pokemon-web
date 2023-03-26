import React, { useEffect, useMemo, useState } from 'react';

import { nanoid } from 'nanoid';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import {
  useAddTeam,
  useGetTeamById,
  useGetTeamByToken,
  useUpdateTeam,
} from '@api/services/firebase/teams-api';
import { TeamPokemonData } from '@api/services/firebase/teams-api/types';
import { useGetRegionById } from '@api/services/region-api';
import ResourceNotFound from '@components/error-view/resource-not-found';
import Title from '@components/title';
import TeamDetailPrevRouteEnum from '@enums/team-details-prev-route-enum';
import { auth } from '@services/firebase/firebase';

import MyTeam from './my-team';
import Name from './name';
import PokemonDetail from './pokemon-detail';
import PokemonList from './pokemon-list';
import Steps from './steps';
import { StepData } from './steps/types';
import './style.scss';
import { MIN_TEAM_COUNT, CurrentTeamData } from './types';

function Teams() {
  const user = auth.currentUser;
  const { teamId, regionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { error, data: regionData } = useGetRegionById(regionId!);
  const {
    error: teamError,
    data: teamData,
    isLoading,
  } = useGetTeamById(teamId!);
  const regionName = regionId || teamData?.name;
  const [searchParams] = useSearchParams();
  const {
    error: teamByTokenError,
    data: teamByTokenData,
    isLoading: isLoadingTeamByToken,
  } = useGetTeamByToken(searchParams.get('token')!);

  const [open, setOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string>();
  const [currentTeam, setCurrentTeam] = useState<CurrentTeamData>({
    name: '',
    pokemons: [],
  });
  const currentTeamCount = currentTeam.pokemons.length;
  const currentTeamIds = useMemo(
    () => currentTeam.pokemons.map((item) => item.name),
    [currentTeamCount]
  );

  const navigateToPreviousRoute = () => {
    const defaultRoute = TeamDetailPrevRouteEnum.Regions;
    const route =
      (location.state?.prevRoute || defaultRoute) ===
      TeamDetailPrevRouteEnum.Regions
        ? `/region/${regionName}`
        : '/teams';
    navigate(route, { replace: true });
  };

  const { mutate: addTeam, isLoading: isLoadingAdd } = useAddTeam({
    onSuccess: navigateToPreviousRoute,
  });
  const { mutate: updateTeam, isLoading: isLoadingUpdate } = useUpdateTeam({
    onSuccess: navigateToPreviousRoute,
  });

  const steps: StepData[] = useMemo(
    () => [
      {
        description: 'Añade el nombre de tu equipo',
        conditionToBeCompleted: () => (currentTeam.name?.length || 0) > 0,
        inProgress: false,
      },
      {
        description: 'Escoge los integrantes',
        conditionToBeCompleted: () =>
          currentTeam.pokemons.length >= MIN_TEAM_COUNT,
        inProgress:
          currentTeam.pokemons.length >= 1 &&
          currentTeam.pokemons.length < MIN_TEAM_COUNT,
      },
    ],
    [currentTeam.name, currentTeam.pokemons.length]
  );

  const onSaveTeam = () => {
    if (teamData?.id) {
      updateTeam({
        id: teamData.id,
        team: {
          ...teamData,
          ...currentTeam,
        },
      });
      return;
    }

    addTeam({
      ...currentTeam,
      regionName: regionId!,
      regionUser: `${regionId}_${user?.uid}`,
      userId: user?.uid!,
      token: `${user?.uid.slice(0, 5)}-${regionId!}-${nanoid(4)}`,
    });
  };

  const onGoBack = () => {
    navigate(-1);
  };

  const showDrawer = (pokemonId: string) => {
    setSelectedPokemon(pokemonId);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChangeName = (name: string) => {
    setCurrentTeam((prev) => ({
      ...prev,
      name: name ?? '',
    }));
  };

  const onAddPokemon = (pokemon: TeamPokemonData) => {
    const currentPokemons = currentTeam.pokemons.slice();
    setCurrentTeam((prev) => ({
      ...prev,
      pokemons: [...currentPokemons, pokemon],
    }));
    onClose();
  };

  const onDeletePokemon = (name: string) => {
    const currentPokemons = currentTeam.pokemons.slice();
    const index = currentPokemons.findIndex((item) => item.name === name);
    currentPokemons.splice(index, 1);
    setCurrentTeam((prev) => ({
      ...prev,
      pokemons: currentPokemons,
    }));
  };

  const initializeTeam = () => {
    setCurrentTeam({
      pokemons: (teamData || teamByTokenData)?.pokemons || [],
      name: (teamData || teamByTokenData)?.name!,
    });
  };

  useEffect(() => {
    if (teamData?.id || teamByTokenData?.name) initializeTeam();
  }, [teamData?.id, teamByTokenData?.name]);

  if (!regionData) return <div />;

  if (error?.response?.status === 404 || teamError || teamByTokenError)
    return (
      <ResourceNotFound message="No pudimos encontrar lo que estás buscando" />
    );

  return (
    <div className="Team-detail">
      <Title text={`Equipo en la región ${regionName!}`} />
      <div className="Team-detail__content">
        <Steps
          items={steps}
          onSave={onSaveTeam}
          onBack={onGoBack}
          saveLoading={isLoadingAdd || isLoadingUpdate}
        />
        <Name teamName={currentTeam.name} onChange={onChangeName} />
      </div>
      <MyTeam
        data={currentTeam?.pokemons}
        onClickItem={showDrawer}
        onDelete={onDeletePokemon}
        loading={isLoading || isLoadingTeamByToken}
      />
      <div className="Team-detail__content">
        <PokemonList onClickItem={showDrawer} regionId={regionName!} />
      </div>
      <PokemonDetail
        pokemonId={selectedPokemon}
        open={open}
        onClose={onClose}
        onAdd={onAddPokemon}
        count={currentTeamCount}
        team={currentTeamIds}
      />
    </div>
  );
}
export default Teams;
