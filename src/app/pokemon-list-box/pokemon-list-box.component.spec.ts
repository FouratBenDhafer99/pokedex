import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListBoxComponent } from './pokemon-list-box.component';

describe('PokemonListBoxComponent', () => {
  let component: PokemonListBoxComponent;
  let fixture: ComponentFixture<PokemonListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
