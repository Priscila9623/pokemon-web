import React, { useEffect, useMemo, useState } from 'react';

import { Alert, Button } from 'antd';
import { nanoid } from 'nanoid';
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { useAddTeam, useUpdateTeam } from '@api/firebase/teams-api';
import { TeamPokemonData } from '@api/firebase/teams-api/types';
import ResourceNotFound from '@components/error-view/resource-not-found';
import Title from '@components/title';
import TeamDetailPrevRouteEnum from '@enums/team-details-prev-route-enum';
import useTeamData from '@hooks/use-team-data';
import { auth } from '@services/firebase/firebase';

import MyTeam from './my-team';
import Name from './name';
import PokemonDetail from './pokemon-detail';
import PokemonList from './pokemon-list';
import Steps from './steps';
import { StepData } from './steps/types';
import './style.scss';
import { MIN_TEAM_COUNT, CurrentTeamData } from './types';

function TeamDetail() {
  const user = auth.currentUser;
  const { teamId, regionId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token')!;
  const {
    data: { team },
    error,
    loading,
  } = useTeamData({ teamId, regionName: regionId!, token });
  const regionName = regionId || team?.regionName;
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
  const isTeamOwner = token && user?.uid === team?.userId;

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
    if (team?.id) {
      updateTeam({
        id: team.id,
        team: {
          ...team,
          ...currentTeam,
        },
      });
      return;
    }

    addTeam({
      ...currentTeam,
      regionName: regionName!,
      regionUser: `${regionName}_${user?.uid}`,
      userId: user?.uid!,
      token: `${user?.uid.slice(0, 3)}-${regionName!}-${nanoid(5)}`,
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
      pokemons: team?.pokemons || [],
      name: team?.name!,
    });
  };

  useEffect(() => {
    if (team?.id || team?.name) initializeTeam();
  }, [team?.id, team?.name]);

  if (error)
    return (
      <ResourceNotFound message="No pudimos encontrar lo que estás buscando" />
    );

  return (
    <div className="Team-detail">
      <Title text={`Equipo en la región ${regionName!}`} />
      <div className="Team-detail__content">
        {isTeamOwner && (
          <Alert
            message="Parece que este equipo te pertenece"
            description="Este equipo se encuentra en tu lista, si es intencional puedes crear un nuevo equipo con la misma información."
            type="warning"
            showIcon
            action={
              <Link to={`/region/${regionName}`}>
                <Button size="small">Ir a mis equipos</Button>
              </Link>
            }
            closable
          />
        )}
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
        loading={loading}
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
export default TeamDetail;
