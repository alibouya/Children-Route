import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ChambresComponent } from './chambres/chambres.component';
import { DiversComponent } from './divers/divers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { SallesmangerComponent } from './sallesmanger/sallesmanger.component';
import { SalonsComponent } from './salons/salons.component';
import { TablesbassesComponent } from './tablesbasses/tablesbasses.component';

const routes: Routes = [
  {
  path: 'header',component: HeaderComponent
  
},{
  path: 'accueil', component: AccueilComponent
},
  {
    path: 'home',
    
      component: HomeComponent
   
  },
  {
    path: 'salons',

    component: SalonsComponent
  },

  {
    path: 'sallesamanger',
    component: SallesmangerComponent
  },
  {
    path: 'chambres',
    component: ChambresComponent
  },
  {
    path: 'divers',
    component: DiversComponent
  },
  {
    path: 'tablesbasses',
    component: TablesbassesComponent
  },

{
  path: 'footer',
  component: FooterComponent
},
{
  path: '', redirectTo: 'header', pathMatch: 'full'

}, {
  path: '**', component: Notfound404Component
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
