import {PokemonType, Type} from "./Type";

export class Pokemon{

  id: number;

  name: string;

  sprites: PokemonSprites

  types: PokemonType[];


  constructor(id: number, name: string, sprites: PokemonSprites, types: PokemonType[]) {
    this.id = id;
    this.name = name;
    this.sprites = sprites;
    this.types = types;
  }
}

class PokemonSprites{

  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;

  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;


  constructor(front_default: string, front_shiny: string, front_female: string, front_shiny_female: string, back_default: string, back_shiny: string, back_female: string, back_shiny_female: string) {
    this.front_default = front_default;
    this.front_shiny = front_shiny;
    this.front_female = front_female;
    this.front_shiny_female = front_shiny_female;
    this.back_default = back_default;
    this.back_shiny = back_shiny;
    this.back_female = back_female;
    this.back_shiny_female = back_shiny_female;
  }
}
