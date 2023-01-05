import {Injectable} from "@angular/core";
import axios, {AxiosError, AxiosResponse} from "axios"
import {BaseUrl} from "../constants/BaseUrl";
import {Endpoints} from "../constants/Endpoints";
import {NamedAPIResourceList} from "../models/APIResource";
import {Utility} from "../constants/Utility";
import {Type} from "../models/Type";

@Injectable({ providedIn: 'root' })
export class TypeService{

  constructor() {
  }


  /**
   * List of Pokemons
   * @param limit How many Pokemons per page
   * @param offset The starting index
   * @returns A list of Pokemons
   */
  public getTypeList(limit?: number, offset?: number): Promise<NamedAPIResourceList>{
    return new Promise<NamedAPIResourceList>(async (resolve, reject) => {
      await axios.get<NamedAPIResourceList>(BaseUrl.REST + Endpoints.TYPE+"?limit="+(limit || Utility.PAGE_LIMIT)+"&offset="+(offset || 0))
        .then((res: AxiosResponse<NamedAPIResourceList>) => resolve(res.data))
        .catch((error: AxiosError<string>) => reject(error));
    })
  }


  /**
   * Type
   * @param typeName The Pokemon's name
   * @returns Type
   */
  public getTypeByName(typeName: string): Promise<Type>{
    return new Promise<Type>( async (resolve, reject) => {
      await axios.get<Type>(BaseUrl.REST + Endpoints.TYPE + "/" + typeName)
        .then((res) => resolve(res.data))
        .catch((error: AxiosError<string>) => reject(error));
    })

  }



}
