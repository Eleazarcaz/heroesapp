import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  Heroe: HeroeModel;
  constructor(private _heroes: HeroesService) {
    this.Heroe = new HeroeModel();
  }

  ngOnInit() {}

  guardar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.Heroe.id) {
      this._heroes
        .actualizarHeroe(this.Heroe)
        .subscribe(resp => console.log(resp));
    } else {
      this._heroes.crearHeroe(this.Heroe).subscribe(resp => {
        console.log(resp);
      });
    }
  }
}
