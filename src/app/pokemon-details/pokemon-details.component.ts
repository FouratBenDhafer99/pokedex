import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogContainer, MatDialogRef} from "@angular/material/dialog";
import {Pokemon} from "../models/Pokemon";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              ) { }


  // @ts-ignore
  pokemon: Pokemon;

  ngOnInit(): void {


    this.pokemon= this.data.pokemon

  }

}
