import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import axios, {AxiosError, AxiosResponse} from "axios"
import {BaseUrl} from "../constants/BaseUrl";
import {Endpoints} from "../constants/Endpoints";
import {NamedAPIResourceList} from "../models/APIResource";
import {Pokemon} from "../models/Pokemon";
import {Utility} from "../constants/Utility";

@Injectable({ providedIn: 'root' })
export class PokemonService{

  constructor() {
  }


  /**
   * List of Pokemons
   * @param limit How many Pokemons per page
   * @param offset The starting index
   * @returns A list of Pokemons
   */
  public getPokemonList(limit?: number, offset?: number): Promise<NamedAPIResourceList>{
    return new Promise<NamedAPIResourceList>(async (resolve, reject) => {
      await axios.get<NamedAPIResourceList>(BaseUrl.REST + Endpoints.POKEMON+"?limit="+(limit || Utility.PAGE_LIMIT)+"&offset="+(offset || Utility.OFFSET))
        .then((res: AxiosResponse<NamedAPIResourceList>) => resolve(res.data))
        .catch((error: AxiosError<string>) => reject(error));
    })
  }


  /**
   * Pokemon
   * @param pokeName The Pokemon's name
   * @returns Pokemon
   */
  public getPokemonByName(pokeName: string): Promise<Pokemon>{
    return new Promise<Pokemon>( async (resolve, reject) => {
      await axios.get<Pokemon>(BaseUrl.REST + Endpoints.POKEMON + "/" + pokeName)
        .then((res) => resolve(res.data))
        .catch((error: AxiosError<string>) => reject(error));
    })

  }



}
