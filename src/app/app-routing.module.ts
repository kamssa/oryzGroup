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
import {EditAchatTravauxComponent} from "./finance/operationsTravaux/achat/edit-achat-travaux/edit-achat-travaux.component";
import {ListeSiteTravauxOperationComponent} from "./finance/siteTravaux/liste-site-travaux-operation/liste-site-travaux-operation.component";
import {EditAchatComponent} from "./finance/operationsTravaux/achat/edit-achat/edit-achat.component";
import {TechniqueComponent} from "./technique/technique.component";
import {BanqueComponent} from "./banque/banque.component";
import {EditLocationComponent} from "./finance/operationsTravaux/location/edit-location/edit-location.component";
import {EditSalaireComponent} from "./finance/operationsTravaux/salaire/edit-salaire/edit-salaire.component";
import {EditPaieLoyerComponent} from "./finance/operationsTravaux/loyer/edit-paie-loyer/edit-paie-loyer.component";
import {EditMainDoeuvreComponent} from "./finance/operationsTravaux/mainouvre/edit-main-doeuvre/edit-main-doeuvre.component";
import {EditAutredepenseTravauxComponent} from "./finance/operationsTravaux/autres/edit-detail/edit-autredepense-travaux.component";
import {EditAutreDepenseComponent} from "./finance/operationsTravaux/autres/edit-autre-depense/edit-autre-depense.component";

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent, canActivate: [AuthGuardService] },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'finance', component: FinanceComponent, canActivate: [AuthGuardService] },
  { path: 'technique', component: TechniqueComponent, canActivate: [AuthGuardService] },
  { path: 'banque', component: BanqueComponent, canActivate: [AuthGuardService] },
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
            component: ListeSiteTravauxOperationComponent

          },
          {
            path: 'achat/:id',
            component: EditAchatComponent

          },
          {
            path: 'location/:id',
            component: EditLocationComponent

          },
          {
            path: 'salaire/:id',
            component: EditSalaireComponent

          },
          {
            path: 'loyer/:id',
            component: EditPaieLoyerComponent

          },
          {
            path: 'oeuvre/:id',
            component: EditMainDoeuvreComponent

          },
          {
            path: 'transport/:id',
            component: EditAchatComponent

          },
          {
            path: 'autre/:id',
            component: EditAutreDepenseComponent

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
