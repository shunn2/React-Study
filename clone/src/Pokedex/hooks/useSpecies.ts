import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

import { SpeciesResponse } from "../types";

const speciesApi = (id?: string) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id || ""}`);
};

const useSpecies = (id?: string) =>
  // useQuery<AxiosResponse<SpeciesResponse>, Error>(["species", { id }], () => speciesApi(id));
  useQuery<AxiosResponse<SpeciesResponse>, Error>(id ? ["species", id] : "pokemon", () => speciesApi(id));

export default useSpecies;
