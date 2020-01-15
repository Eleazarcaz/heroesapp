import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app-routing';

import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  declarations: [AppComponent, HeroeComponent, HeroesComponent],
  imports: [BrowserModule, AppRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
