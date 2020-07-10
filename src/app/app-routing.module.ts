import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion/connexion.component';
import {FinanceComponent} from "./finance/finance.component";
import {TechniqueComponent} from "./technique/technique.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AuthGuardService} from "./service/auth-guard.service";


const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'auth', component: ConnexionComponent},
  {path: 'finance', component: FinanceComponent, canActivate: [ AuthGuardService ]},
  {path: 'technique', component: TechniqueComponent, canActivate: [ AuthGuardService ]},
  {path: '', component: ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
