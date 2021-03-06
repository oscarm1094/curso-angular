import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcumuladorComponent } from './acumulador/acumulador.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuizqComponent } from './menuizq/menuizq.component';

@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent,
    CronometroComponent,
    CabeceraComponent,
    MenuizqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
