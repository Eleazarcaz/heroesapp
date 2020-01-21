import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from 'src/app/models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  Heroes: HeroeModel[] = [];
  cargando = false;

  constructor(private _heroes: HeroesService) {
    this.cargando = true;
  }

  ngOnInit() {
    this._heroes.getHeroes().subscribe(resp => {
      this.Heroes = resp;
      this.cargando = false;
    });
  }

  borrarHeroe(heroe: HeroeModel, i: number) {
    Swal.fire({
      title: 'Borrar',
      text: `¿Deseas borrar a ${heroe.nombre} ?`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value === true) {
        Swal.fire('Borrado', `Borrado con exito ${heroe.nombre}`, 'success');
        this.Heroes.splice(i, 1);
        this._heroes.borrarHeroe(heroe.id).subscribe();
      }
    });
  }
}
