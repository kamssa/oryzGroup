import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnexionComponent} from './connexion/connexion/connexion.component';
import {FinanceComponent} from './finance/finance.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ManageSiteTravauxComponent} from './finance/siteTravaux/manage-site-travaux/manage-site-travaux.component';
import {AuthGuardService} from './helper/auth-guard.service';
import {ListeSiteTravauComponent} from "./finance/siteTravaux/liste-site-travau/liste-site-travau.component";
import {DetailSiteTravauxComponent} from "./finance/siteTravaux/detail-site-travaux/detail-site-travaux.component";
import {EditSiteTravauxComponent} from "./finance/siteTravaux/edit-site-travaux/edit-site-travaux.component";
import {EditAchatTravauxComponent} from "./finance/operationsTravaux/edit-achat-travaux/edit-achat-travaux.component";

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent, canActivate: [AuthGuardService] },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'finance', component: FinanceComponent, canActivate: [AuthGuardService] },
  { path: 'achatTravaux', component: EditAchatTravauxComponent, canActivate: [AuthGuardService] },
  {
    path: 'site',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: ManageSiteTravauxComponent,

      },
      {
        path: 'liste',
       // canActivateChild: [AuthGuardService],
        component: ListeSiteTravauComponent,
        children: [
          {
            path: 'detail/:id',
            component: DetailSiteTravauxComponent

          },
          {
            path: ':id/edite',
            component: EditSiteTravauxComponent,
          },
          {
            path: 'creer', component: EditSiteTravauxComponent,
          }

        ]

      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
