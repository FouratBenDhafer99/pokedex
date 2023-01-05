import {NamedAPIResource} from "./APIResource";

export class Type{

  id: number;
  name: string;


  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class PokemonType {

  slot: number;
  type: NamedAPIResource;


  constructor(slot: number, type: NamedAPIResource) {
    this.slot = slot;
    this.type = type;
  }
}
