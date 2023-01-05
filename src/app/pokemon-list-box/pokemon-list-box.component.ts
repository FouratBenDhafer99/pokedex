import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {TypesColor} from "../constants/Types";

@Component({
  selector: 'app-pokemon-list-box',
  templateUrl: './pokemon-list-box.component.html',
  styleUrls: ['./pokemon-list-box.component.scss']
})
export class PokemonListBoxComponent implements OnInit {

  @Input() pokemon! :Pokemon

  constructor() { }

  ngOnInit(): void {
  }

  getTypeColor(type: string): string{
      // @ts-ignore
    return TypesColor[type.toLowerCase()]
  }

}
