import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { HomeComponent } from './home/home.component';
import { SalonsComponent } from './salons/salons.component';
import { ChambresComponent } from './chambres/chambres.component';
import { TablesbassesComponent } from './tablesbasses/tablesbasses.component';
import { SallesmangerComponent } from './sallesmanger/sallesmanger.component';
import { DiversComponent } from './divers/divers.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Notfound404Component,
    HomeComponent,
    SalonsComponent,
    ChambresComponent,
    TablesbassesComponent,
    SallesmangerComponent,
    DiversComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
