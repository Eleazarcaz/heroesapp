import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  Heroes: HeroeModel[] = [];
  constructor(private _heroes: HeroesService) {}

  ngOnInit() {
    this._heroes.getHeroes().subscribe(resp => (this.Heroes = resp));
    console.log(this.Heroes);
  }
}
