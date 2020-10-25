import axios from 'axios';

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
});


export async function getPokemonByName(name) {
  return await api.get(`pokemon/${name}`);
}

export default api;