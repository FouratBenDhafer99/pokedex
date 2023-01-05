import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  types: string[]= ["Fire", "Water", "Grass", "Fairy"]
  selectedTypes = new FormControl('');

  regions: string[]= ["Fire", "Water", "Grass", "Fairy"]
  selectedRegions = new FormControl('');

  ngOnInit(): void {
  }

}
