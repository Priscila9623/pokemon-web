import axios from 'axios';

const pokemonServer = axios.create({
  baseURL: import.meta.env.VITE_POKEMON_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default pokemonServer;
