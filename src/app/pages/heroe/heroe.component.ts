import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  Heroe: HeroeModel;
  constructor() {
    this.Heroe = new HeroeModel();
  }

  ngOnInit() {}

  guardar(form: NgForm) {
    console.log(form.value);
  }
}
