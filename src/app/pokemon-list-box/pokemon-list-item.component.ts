import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {TypesBackgroundColor, TypesBadgeColor} from "../constants/Types";
import {MatDialog} from "@angular/material/dialog";
import {PokemonDetailsComponent} from "../pokemon-details/pokemon-details.component";

@Component({
  selector: 'app-pokemon-list-box',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {

  @Input() pokemon! :Pokemon

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getTypeBadgeColor(type: string): string{
    // @ts-ignore
    return TypesBadgeColor[type.toLowerCase()]
  }

  getTypeBackgroundColor(type: string): string{
    // @ts-ignore
    return TypesBackgroundColor[type.toLowerCase()]
  }

  openDialog(){
    this.dialog.open(PokemonDetailsComponent,{
      data:{
        pokemon: this.pokemon
      },
      panelClass: 'dialogClass',

    })
  }

}
