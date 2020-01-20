import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  Heroe: HeroeModel;
  constructor(private _heroes: HeroesService, private _route: ActivatedRoute) {
    this.Heroe = new HeroeModel();
  }

  ngOnInit() {
    const ID = this._route.snapshot.paramMap.get('id');

    if (ID !== 'nuevo') {
      this._heroes.getHeroe(ID).subscribe((resp: any) => {
        this.Heroe = resp;
        this.Heroe.id = ID;
      });
    }
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire(this.Heroe.nombre, 'Actualizando', 'info');
    Swal.showLoading();
    let peticion: Observable<any>;

    if (this.Heroe.id) {
      peticion = this._heroes.actualizarHeroe(this.Heroe);
    } else {
      peticion = this._heroes.crearHeroe(this.Heroe);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.Heroe.nombre,
        icon: 'success',
        text: 'Se actualizo correctamente'
      });
    });
  }
}
