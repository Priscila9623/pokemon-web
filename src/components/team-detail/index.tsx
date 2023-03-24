import React, { useMemo, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { useGetRegionById } from '@api/services/region-api';
import ResourceNotFound from '@components/error-view/resource-not-found';
import Title from '@components/title';

import { CharacterData } from './character/types';
import MyTeam from './my-team';
import Name from './name';
import PokemonDetail from './pokemon-detail';
import PokemonList from './pokemon-list';
import Steps from './steps';
import { StepData } from './steps/types';
import './style.scss';
import { MIN_TEAM_COUNT, PokemonTeamData } from './types';

const team = '1';

function Teams() {
  const { teamId, regionId } = useParams();
  const navigate = useNavigate();
  const { error, data: regionData } = useGetRegionById(regionId!);

  const [open, setOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string>();
  const [currentTeam, setCurrentTeam] = useState<PokemonTeamData>({
    name: '',
    pokemons: [],
  });
  const currentTeamCount = currentTeam.pokemons.length;
  const currentTeamIds = useMemo(
    () => currentTeam.pokemons.map((item) => item.name),
    [currentTeamCount]
  );

  const steps: StepData[] = useMemo(
    () => [
      {
        description: 'Añade el nombre de tu equipo',
        conditionToBeCompleted: () => currentTeam.name.length > 0,
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

  const onSaveTeam = () => {};

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

  const onAddPokemon = (pokemon: CharacterData) => {
    const currentPokemons = currentTeam.pokemons.slice();
    setCurrentTeam((prev) => ({
      ...prev,
      pokemons: [...currentPokemons, pokemon],
    }));
    onClose();
  };

  const onDeletePokemon = (id: string) => {
    const currentPokemons = currentTeam.pokemons.slice();
    const index = currentPokemons.findIndex((item) => item.id === id);
    currentPokemons.splice(index, 1);
    setCurrentTeam((prev) => ({
      ...prev,
      pokemons: currentPokemons,
    }));
  };

  if (!regionData) return <div />;

  if (error?.response?.status === 404 || team === teamId)
    return (
      <ResourceNotFound message="No pudimos encontrar lo que estás buscando" />
    );

  return (
    <div className="Team-detail">
      <Title text={`Equipo en la región ${regionId!}`} />
      <div className="Team-detail__container">
        <Steps items={steps} onSave={onSaveTeam} onBack={onGoBack} />
        <Name teamName={teamId} onChange={onChangeName} />
      </div>
      <MyTeam
        data={currentTeam?.pokemons}
        onClickItem={showDrawer}
        onDelete={onDeletePokemon}
      />
      <div className="Team-detail__container">
        <PokemonList onClickItem={showDrawer} regionId={regionId!} />
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
