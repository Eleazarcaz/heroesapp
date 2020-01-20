import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://heroes-app-f1d91.firebaseio.com';
  }

  actualizarHeroe(heroe: HeroeModel) {
    const HEROE_TEMP: HeroeModel = {
      ...heroe
    };

    delete HEROE_TEMP.id;

    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, HEROE_TEMP);
  }

  crearHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((resp: any) => {
        heroe.id = resp.name;
        return heroe;
      })
    );
  }

  getHeroes() {
    return this.http
      .get(`${this.url}/heroes.json`)
      .pipe(map(this.crearArreglo));
  }

  private crearArreglo(heroesObj) {
    const HEROES: HeroeModel[] = [];

    console.log(heroesObj);

    if (heroesObj === null) return [];

    Object.keys(heroesObj).forEach(key => {
      const HEROE: HeroeModel = heroesObj[key];
      HEROE.id = key;

      HEROES.push(HEROE);
    });

    return HEROES;
  }
}
