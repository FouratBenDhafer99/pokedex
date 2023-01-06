import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../services/PokemonService";
import {NamedAPIResource, NamedAPIResourceList} from "../models/APIResource";
import {Pokemon} from "../models/Pokemon";
import {TypeService} from "../services/TypeService";
import {Type} from "../models/Type";
import {Types} from "../constants/Types";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(
    private pokeService: PokemonService,
    private typeService: TypeService,
    ) { }


  //Returned Pokemon's list from the API
  dataList: NamedAPIResourceList= new NamedAPIResourceList(0, null, null, [])

  pokemons: Pokemon[]= []



  ngOnInit() {
    this.getPokemons()
  }
  getPokemons(): void{
    this.pokeService.getPokemonList().then((res:NamedAPIResourceList)=> {
      this.dataList= res

      this.dataList.results.forEach( (pokemonAPI: NamedAPIResource)=>{
        this.getPokemonDetails(pokemonAPI)
      })

    })
  }

  getPokemonDetails(pokemonAPI: NamedAPIResource): void{
    this.pokeService.getPokemonByName(pokemonAPI.name)
      .then((res: Pokemon)=>{
        let types= []
        for (let type of res.types) {
          // @ts-ignore
          types.push(Types[type.type.name])
        }
        res.types= types
        this.pokemons.push(res)
      })
      .then(noth=> this.pokemons.sort((a,b)=> {return a.id - b.id}))
  }

}
